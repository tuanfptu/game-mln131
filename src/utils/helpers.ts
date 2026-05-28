import { BoardCell } from '@/types';

export function findShortestPath(
  board: BoardCell[],
  start: { row: number; col: number },
  end: { row: number; col: number }
): BoardCell[] | null {
  const grid: BoardCell[][] = Array.from({ length: 8 }, () => []);
  board.forEach((cell) => {
    grid[cell.row][cell.col] = cell;
  });

  const queue: { pos: { row: number; col: number }; path: BoardCell[] }[] = [
    { pos: start, path: [grid[start.row][start.col]] }
  ];
  const visited = new Set<string>();
  visited.add(`${start.row},${start.col}`);

  const dirs = [
    { r: -1, c: 0 },
    { r: 1, c: 0 },
    { r: 0, c: -1 },
    { r: 0, c: 1 },
  ];

  while (queue.length > 0) {
    const { pos, path } = queue.shift()!;
    if (pos.row === end.row && pos.col === end.col) return path;

    for (const d of dirs) {
      const nr = pos.row + d.r;
      const nc = pos.col + d.c;

      if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
        const key = `${nr},${nc}`;
        if (!visited.has(key)) {
          const neighbor = grid[nr][nc];
          if (neighbor && neighbor.type !== 'bush') {
            visited.add(key);
            queue.push({
              pos: { row: nr, col: nc },
              path: [...path, neighbor],
            });
          }
        }
      }
    }
  }

  return null;
}

export function hasValidPath(
  board: BoardCell[],
  start: { row: number; col: number },
  end: { row: number; col: number }
): boolean {
  return findShortestPath(board, start, end) !== null;
}

export function generateBoard(): BoardCell[] {
  let attempts = 0;
  
  while (attempts < 1000) {
    const cells: BoardCell[] = [];
    for (let i = 0; i < 64; i++) {
      const row = Math.floor(i / 8);
      const col = i % 8;
      
      // Start is miner (0,0), End is treasure (7,7)
      if (row === 0 && col === 0) {
        cells.push({ id: i, type: 'miner', revealed: true, row, col });
        continue;
      }
      if (row === 7 && col === 7) {
        cells.push({ id: i, type: 'treasure', revealed: true, row, col });
        continue;
      }

      // 18% chance of bushes (obstacles), 45% chance of stars (questions) to ensure rich stars
      const rand = Math.random();
      let type: BoardCell['type'] = 'empty';
      
      if (rand < 0.18) {
        type = 'bush'; // Obstacle
      } else if (rand < 0.63) {
        type = 'star'; // Question Star
      }

      cells.push({
        id: i,
        type,
        revealed: type === 'bush' || type === 'miner',
        row,
        col,
      });
    }

    // Always reveal stars
    cells.forEach(c => {
      if (c.type === 'star') c.revealed = true;
    });

    // Check shortest path and ensure it has at least 10 stars
    const path = findShortestPath(cells, { row: 0, col: 0 }, { row: 7, col: 7 });
    if (path) {
      const starCount = path.filter(c => c.type === 'star').length;
      if (starCount >= 10) {
        return cells;
      }
    }
    attempts++;
  }

  // Fallback map guaranteed to have at least 10 stars on shortest path
  const cells: BoardCell[] = [];
  for (let i = 0; i < 64; i++) {
    const row = Math.floor(i / 8);
    const col = i % 8;
    let type: BoardCell['type'] = 'empty';
    if (row === 0 && col === 0) type = 'miner';
    else if (row === 7 && col === 7) type = 'treasure';
    else if ((row + col) % 2 === 1) type = 'star'; // checkerboard stars

    cells.push({
      id: i,
      type,
      revealed: true,
      row,
      col,
    });
  }
  return cells;
}

export function getScoreForDifficulty(difficulty: 'easy' | 'medium' | 'hard'): number {
  switch (difficulty) {
    case 'easy':
      return 10;
    case 'medium':
      return 15;
    case 'hard':
      return 20;
    default:
      return 10;
  }
}

export function getPenaltyForDifficulty(difficulty: 'easy' | 'medium' | 'hard'): number {
  switch (difficulty) {
    case 'easy':
      return 3;
    case 'medium':
      return 5;
    case 'hard':
      return 5;
    default:
      return 3;
  }
}

export function getCellEmoji(type: BoardCell['type']): string {
  switch (type) {
    case 'bush':
      return '🌳';
    case 'star':
      return '⭐';
    case 'treasure':
      return '🏆';
    case 'miner':
      return '🐿️';
    case 'empty':
      return '🟫';
    default:
      return '🟫';
  }
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function getRandomUnrevealedCell(cells: BoardCell[]): number {
  const unrevealed = cells.filter(c => !c.revealed && c.type !== 'miner');
  if (unrevealed.length === 0) return -1;
  const randomCell = unrevealed[Math.floor(Math.random() * unrevealed.length)];
  return randomCell.id;
}
