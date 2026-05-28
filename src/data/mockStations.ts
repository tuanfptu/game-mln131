import { Station } from '@/types';

export const MOCK_STATIONS: Station[] = [
  {
    stationNumber: 1,
    title: '⛏️ Mỏ Khởi Đầu',
    question: 'Bản chất của tôn giáo theo quan điểm của chủ nghĩa Mác - Lênin là gì?',
    answers: [
      'Là một hình thức phản ánh hoang đường, hư ảo các lực lượng tự nhiên và xã hội vào đầu óc con người.',
      'Là sự sáng tạo của đấng siêu nhiên tối cao để răn dạy con người sống hướng thiện.',
      'Là hiện tượng tự nhiên tồn tại vĩnh hằng cùng với sự phát triển của loài người.',
      'Là một công cụ thuần túy của giai cấp thống trị dùng để cai trị giai cấp bị trị.'
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 2,
    title: '🌿 Rừng Bí Ẩn',
    question: 'Nguồn gốc tự nhiên - xã hội của tôn giáo xuất phát từ đâu?',
    answers: [
      'Sự bất lực của con người trước các lực lượng tự nhiên và các quan hệ xã hội phức tạp.',
      'Sự phát triển vượt bậc của nhận thức con người về vũ trụ.',
      'Sự xuất hiện của các triết gia và nhà tư tưởng lỗi lạc.',
      'Nhu cầu thẩm mỹ và giải trí tinh thần lành mạnh của nhân dân.'
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 3,
    title: '🏔️ Đỉnh Núi Tri Thức',
    question: 'Nguồn gốc nhận thức của tôn giáo là gì?',
    answers: [
      'Sự phát triển quá cao của tư duy khoa học biện chứng.',
      'Sự tuyệt đối hóa, cường điệu hóa mặt chủ thể của nhận thức con người trước hiện thực khách quan.',
      'Khả năng quan sát thế giới khách quan một cách toàn diện và chính xác.',
      'Sự hiểu biết sâu sắc về các quy luật vận động của tự nhiên.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 4,
    title: '💎 Hang Kim Cương',
    question: 'Nguồn gốc tâm lý của tôn giáo bao gồm những yếu tố nào?',
    answers: [
      'Niềm tin tuyệt đối vào sức mạnh của khoa học kỹ thuật hiện đại.',
      'Tâm lý lạc quan, yêu đời và khao khát cống hiến cho xã hội.',
      'Sự sợ hãi, lo âu trước các lực lượng tự nhiên và xã hội, cùng với tâm lý muốn được che chở.',
      'Ý chí tự lực tự cường và tự chủ mạnh mẽ của con người.'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 5,
    title: '🌋 Núi Lửa Thử Thách',
    question: 'Tính chất nào sau đây KHÔNG phải là tính chất của tôn giáo theo chủ nghĩa Mác - Lênin?',
    answers: [
      'Tính lịch sử',
      'Tính vĩnh hằng',
      'Tính quần chúng',
      'Tính chính trị'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 6,
    title: '🏝️ Đảo Hoang Dã',
    question: 'Tại sao tôn giáo có tính lịch sử?',
    answers: [
      'Vì tôn giáo gắn liền với sự phát triển vô hạn của thế giới tự nhiên.',
      'Vì tôn giáo có sự nảy sinh, tồn tại, phát triển và sẽ biến mất khi các điều kiện lịch sử sinh ra nó không còn.',
      'Vì tôn giáo luôn giữ nguyên bản chất không thay đổi qua mọi thời đại lịch sử.',
      'Vì tôn giáo chỉ xuất hiện ở một số giai đoạn lịch sử tiến bộ của nhân loại.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 7,
    title: '🗺️ Bản Đồ Cổ',
    question: 'Tính chính trị của tôn giáo xuất hiện khi nào?',
    answers: [
      'Ngay từ khi loài người mới xuất hiện ở thời kỳ công xã nguyên thủy.',
      'Khi xã hội xuất hiện phân chia giai cấp và giai cấp thống trị lợi dụng tôn giáo để bảo vệ lợi ích giai cấp.',
      'Khi tôn giáo được đa số nhân dân lao động tự nguyện đóng góp xây dựng tổ chức.',
      'Khi các quốc gia tổ chức các hoạt động giao lưu văn hóa quốc tế.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 8,
    title: '⚓ Bến Tàu Hải Tặc',
    question: 'Tính quần chúng của tôn giáo thể hiện ở điểm nào?',
    answers: [
      'Chỉ có người nghèo khổ mới tin theo các tôn giáo.',
      'Tôn giáo là nơi sinh hoạt văn hóa tinh thần của đông đảo quần chúng nhân dân lao động.',
      'Tôn giáo luôn được tổ chức tại các quảng trường công cộng đông người.',
      'Mọi thành viên trong xã hội đều bắt buộc phải gia nhập tôn giáo.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 9,
    title: '🏰 Lâu Đài Bí Mật',
    question: 'Nguyên tắc đầu tiên và quan trọng nhất của chủ nghĩa Mác - Lênin trong giải quyết vấn đề tôn giáo là gì?',
    answers: [
      'Nghiêm cấm triệt để tất cả các hoạt động tín ngưỡng, tôn giáo.',
      'Tôn trọng và bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của công dân.',
      'Bắt buộc mọi người dân phải học giáo lý của một tôn giáo nhất định.',
      'Đưa tôn giáo vào làm môn học bắt buộc tại tất cả các cấp học.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 10,
    title: '👑 Kho Báu Cuối Cùng',
    question: 'Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo trong thời kỳ quá độ phải gắn liền với quá trình nào?',
    answers: [
      'Tăng cường các biện pháp hành chính cưỡng chế đối với tín đồ.',
      'Tuyên truyền phê phán mạnh mẽ các giáo lý tôn giáo hằng ngày.',
      'Quá trình xây dựng chủ nghĩa xã hội trên các lĩnh vực kinh tế, chính trị, văn hóa, xã hội.',
      'Đóng cửa toàn bộ các cơ sở thờ tự của tôn giáo.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 11,
    title: '🏺 Thung Lũng Cổ Đại',
    question: 'Trong giải quyết vấn đề tôn giáo, việc phân biệt hai mặt chính trị và tư tưởng nhằm mục đích gì?',
    answers: [
      'Để phân loại và trừng phạt các tín đồ theo mức độ ngoan đạo của họ.',
      'Để đoàn kết rộng rãi đồng bào có đạo và không có đạo trong sự nghiệp xây dựng và bảo vệ Tổ quốc.',
      'Để cô lập những người có niềm tin tôn giáo sâu sắc ra khỏi đời sống xã hội.',
      'Để xóa bỏ các giá trị văn hóa nghệ thuật chịu ảnh hưởng từ tôn giáo.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 12,
    title: '🌲 Rừng Gió Hú',
    question: 'Mặt tư tưởng trong giải quyết vấn đề tôn giáo phản ánh điều gì?',
    answers: [
      'Sự khác biệt về niềm tin, thế giới quan giữa người có đạo và người không có đạo hoặc giữa các tôn giáo.',
      'Sự lợi dụng tôn giáo của các thế lực phản động chống phá cách mạng.',
      'Mâu thuẫn đối kháng trực tiếp về quyền lợi kinh tế giữa các tầng lớp nhân dân.',
      'Cuộc đấu tranh vũ trang giành quyền lực chính trị trong xã hội.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 13,
    title: '🏜️ Sa Mạc Cát Vàng',
    question: 'Mặt chính trị trong giải quyết vấn đề tôn giáo phản ánh điều gì?',
    answers: [
      'Sự khác biệt về nhu cầu tâm linh thuần túy của các tín đồ.',
      'Sự lợi dụng tôn giáo của các thế lực phản động, thù địch chống lại sự nghiệp xây dựng chủ nghĩa xã hội.',
      'Mối liên kết hữu nghị tốt đẹp giữa các giáo phận tôn giáo trên thế giới.',
      'Sự tranh luận học thuật về nguồn gốc vũ trụ giữa các nhà khoa học.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 14,
    title: '🏰 Tháp Cổ Kính',
    question: 'Quan điểm lịch sử cụ thể khi giải quyết vấn đề tôn giáo yêu cầu điều gì?',
    answers: [
      'Phải áp dụng một chính sách cứng nhắc thống nhất cho mọi thời kỳ.',
      'Phải xem xét tôn giáo ở mỗi thời kỳ, hoàn cảnh lịch sử cụ thể để có chính sách ứng xử phù hợp.',
      'Chỉ quan tâm đến lịch sử ra đời của tôn giáo mà không cần chú ý hiện tại.',
      'Bỏ qua những biến đổi của tôn giáo trong thời đại ngày nay.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 15,
    title: '🗺️ Vịnh Cướp Biển',
    question: 'Hiện nay ở Việt Nam có khoảng bao nhiêu tôn giáo được Nhà nước công nhận hoặc cấp đăng ký hoạt động?',
    answers: [
      '6 tôn giáo với 10 tổ chức tôn giáo.',
      '16 tôn giáo với hơn 40 tổ chức tôn giáo.',
      '30 tôn giáo với hơn 100 tổ chức tôn giáo.',
      'Chỉ có 2 tôn giáo là Phật giáo và Công giáo.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 16,
    title: '🌊 Đầm Lầy Sương Mù',
    question: 'Tôn giáo nào sau đây là tôn giáo nội sinh (ra đời ngay tại Việt Nam)?',
    answers: [
      'Phật giáo và Công giáo',
      'Hồi giáo và Tin lành',
      'Phật giáo Hòa Hảo và Cao Đài',
      'Hindu giáo và Cơ đốc giáo'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 17,
    title: '🏛️ Đền Thần Bí',
    question: 'Đặc điểm nổi bật về tôn giáo ở Việt Nam là gì?',
    answers: [
      'Là quốc gia thuần nhất một tôn giáo duy nhất.',
      'Là quốc gia có nhiều tôn giáo đan xen, cùng tồn tại hòa bình và gắn bó đồng hành cùng dân tộc.',
      'Là quốc gia luôn xảy ra xung đột tôn giáo và sắc tộc gay gắt.',
      'Các tôn giáo tại Việt Nam hoàn toàn không có mối liên hệ nào với quốc tế.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 18,
    title: '⛰️ Vực Sâu Thử Thách',
    question: 'Đa số tín đồ các tôn giáo ở Việt Nam thuộc thành phần giai cấp nào?',
    answers: [
      'Tầng lớp quý tộc và giới thượng lưu giàu có.',
      'Giai cấp công nhân, nông dân và người lao động.',
      'Chủ yếu là giới trí thức và các nhà khoa học.',
      'Đại bộ phận là người nước ngoài đang cư trú.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 19,
    title: '🏕️ Thung Lũng Xanh',
    question: 'Các tôn giáo ở Việt Nam có đặc điểm gì về mối quan hệ với dân tộc?',
    answers: [
      'Luôn đối đầu và cản trở sự phát triển của dân tộc.',
      'Luôn đồng hành, gắn bó và có đóng góp tích cực cho sự nghiệp xây dựng và bảo vệ đất nước.',
      'Hoàn toàn thờ ơ trước vận mệnh của dân tộc.',
      'Chỉ chú trọng hoạt động quốc tế mà không quan tâm đến lợi ích quốc gia.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 20,
    title: '⛩️ Cổng Trời cao rộng',
    question: 'Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013 khẳng định điều gì về quyền tự do tín ngưỡng?',
    answers: [
      'Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào.',
      'Chỉ những người trên 18 tuổi mới được quyền tự do tín ngưỡng.',
      'Tất cả mọi công dân đều bắt buộc phải đăng ký theo một tôn giáo.',
      'Nhà nước bảo hộ quyền tự do hoạt động tôn giáo không giới hạn pháp luật.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 21,
    title: '💎 Hang Động Pha Lê',
    question: 'Chính sách tôn giáo của Đảng và Nhà nước Việt Nam hiện nay coi tín ngưỡng, tôn giáo là:',
    answers: [
      'Một tệ nạn xã hội cần sớm được bài trừ dứt điểm.',
      'Nhu cầu tinh thần của một bộ phận nhân dân, đang và sẽ tồn tại cùng dân tộc trong quá trình xây dựng CNXH.',
      'Một tổ chức chính trị độc lập có quyền lực tối cao.',
      'Một công cụ thúc đẩy tăng trưởng kinh tế nhanh chóng.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 22,
    title: '🌿 Vườn Thượng Uyển',
    question: 'Công tác tôn giáo ở Việt Nam thực chất là công tác gì?',
    answers: [
      'Công tác quản lý thị trường văn hóa.',
      'Công tác giáo dục bắt buộc đối với chức sắc tôn giáo.',
      'Công tác vận động quần chúng.',
      'Công tác kiểm soát tài chính của các nhà chùa và nhà thờ.'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 23,
    title: '🐚 Đảo Ngọc Trai',
    question: 'Nội dung cốt lõi của công tác tôn giáo ở Việt Nam là gì?',
    answers: [
      'Vận động đồng bào có đạo, tăng cường đoàn kết toàn dân tộc vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
      'Xóa bỏ mọi niềm tin tôn giáo trong đời sống tinh thần nhân dân.',
      'Quản lý chặt chẽ số lượng người gia nhập các tôn giáo hằng năm.',
      'Tập trung phát triển du lịch tâm linh để thu hút vốn đầu tư nước ngoài.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 24,
    title: '⛰️ Đỉnh Băng Tuyết',
    question: 'Hoạt động tôn giáo hợp pháp ở Việt Nam được Nhà nước đối xử thế nào?',
    answers: [
      'Bị hạn chế và giám sát chặt chẽ ở mọi nơi.',
      'Được tôn trọng và bảo hộ bằng pháp luật.',
      'Không được phép tổ chức ngoài phạm vi gia đình.',
      'Được Nhà nước cấp toàn bộ kinh phí hoạt động.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 25,
    title: '🏯 Lăng Mộ Cổ',
    question: 'Hành vi lợi dụng tín ngưỡng, tôn giáo để xâm phạm lợi ích quốc gia, quyền và lợi ích hợp pháp của công dân sẽ bị:',
    answers: [
      'Bỏ qua vì tôn trọng quyền tự do tôn giáo.',
      'Xử lý nghiêm minh theo quy định của pháp luật.',
      'Chỉ bị nhắc nhở nhẹ nhàng thông qua ban trị sự.',
      'Yêu cầu nộp phạt hành chính tượng trưng.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 26,
    title: '🛤️ Con Đường Tơ Lụa',
    question: 'Mối quan hệ giữa dân tộc và tôn giáo ở Việt Nam có đặc điểm nổi bật nào?',
    answers: [
      'Tách biệt hoàn toàn, không liên quan và không tác động đến nhau.',
      'Đan xen, gắn kết chặt chẽ và tác động lẫn nhau trong lịch sử cũng như hiện tại.',
      'Luôn luôn mâu thuẫn đối kháng sâu sắc và không thể dung hòa.',
      'Chỉ xuất hiện mối quan hệ khi có sự can thiệp từ Liên Hợp Quốc.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 27,
    title: '⛲ Suối Nguồn Tươi Trẻ',
    question: 'Tại các vùng đồng bào dân tộc thiểu số ở Việt Nam, tôn giáo thường có vai trò gì?',
    answers: [
      'Không có bất kỳ vai trò nào đáng kể.',
      'Vừa là niềm tin tâm linh, vừa là nhân tố chi phối mạnh mẽ phong tục tập quán và lối sống.',
      'Là nguyên nhân chính gây ra tình trạng mù chữ.',
      'Là rào cản ngăn cấm đồng bào tham gia lao động sản xuất.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 28,
    title: '🔥 Thử Thách Lửa Đỏ',
    question: 'Các thế lực thù địch thường lợi dụng vấn đề dân tộc và tôn giáo ở Việt Nam nhằm mục đích gì?',
    answers: [
      'Giúp đỡ đồng bào nâng cao trình độ học vấn và thoát nghèo.',
      'Chia rẽ khối đại đoàn kết toàn dân tộc và chống phá chế độ xã hội chủ nghĩa.',
      'Xây dựng thêm các công trình tôn giáo hiện đại, khang trang.',
      'Bảo tồn các nét đẹp văn hóa phi vật thể của Việt Nam.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 29,
    title: '🌴 Ốc Đảo Sa Mạc',
    question: 'Định hướng giải quyết quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay chú trọng điều gì?',
    answers: [
      'Tập trung đầu tư phát triển kinh tế vùng đô thị trước rồi mới đến vùng dân tộc thiểu số.',
      'Kết hợp chặt chẽ việc thực hiện chính sách dân tộc với chính sách tôn giáo, nâng cao đời sống mọi mặt của nhân dân.',
      'Tách rời việc thực hiện chính sách dân tộc và chính sách tôn giáo làm hai hướng độc lập.',
      'Khuyến khích đồng bào từ bỏ tôn giáo để tập trung phát triển sản xuất.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 30,
    title: '📖 Thư Viện Cổ Kính',
    question: 'Ai là tác giả của câu nói nổi tiếng: "Tôn giáo là thuốc phiện của nhân dân"?',
    answers: [
      'V.I.Lênin',
      'Ph.Ăngghen',
      'Các Mác',
      'Hồ Chí Minh'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 31,
    title: '⚡ Đỉnh Sấm Sét',
    question: 'Theo chủ nghĩa Mác - Lênin, tôn giáo sẽ tự biến mất khi nào?',
    answers: [
      'Khi các nguồn gốc sinh ra nó bị triệt tiêu hoàn toàn dưới xã hội cộng sản chủ nghĩa phát triển cao.',
      'Ngay sau khi giai cấp công nhân giành được chính quyền về tay mình.',
      'Khi mọi người dân được phổ cập trình độ đại học trên phạm vi cả nước.',
      'Tôn giáo sẽ không bao giờ biến mất dưới bất kỳ chế độ xã hội nào.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 32,
    title: '🏞️ Thác Nước Bạc',
    question: 'Nguyên nhân nào dẫn đến sự đan xen giữa dân tộc và tôn giáo ở Việt Nam?',
    answers: [
      'Do lịch sử du nhập các tôn giáo gắn liền với các quá trình di cư và sinh sống của các tộc người.',
      'Do Nhà nước quy định mỗi tộc người phải theo một tôn giáo cụ thể.',
      'Do địa hình Việt Nam chủ yếu là đồi núi hiểm trở và bị chia cắt.',
      'Do các tôn giáo ở Việt Nam đều có chung một giáo chủ sáng lập.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 33,
    title: '🏰 Hoàng Cung Lộng Lẫy',
    question: 'Trong lịch sử Việt Nam, tôn giáo nào từng được coi là Quốc giáo dưới triều đại Lý - Trần?',
    answers: [
      'Nho giáo',
      'Đạo giáo',
      'Phật giáo',
      'Thiên Chúa giáo'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 34,
    title: '🌉 Cầu Vồng Trí Tuệ',
    question: 'Phương châm hành đạo của Giáo hội Phật giáo Việt Nam hiện nay là gì?',
    answers: [
      'Nước vinh - Đạo sáng',
      'Kính Chúa - Yêu nước',
      'Đạo pháp - Dân tộc - Chủ nghĩa xã hội',
      'Tốt đời - Đẹp đạo'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 35,
    title: '🧭 La Bàn Định Hướng',
    question: 'Phương châm hành đạo của Công giáo Việt Nam theo Thư chung năm 1980 là gì?',
    answers: [
      'Sống Phúc âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào.',
      'Đồng hành cùng nhân dân xây dựng thế giới hòa bình, thịnh vượng.',
      'Bảo vệ giáo hội, tránh xa các hoạt động thế tục của xã hội.',
      'Tập trung cầu nguyện và hướng về thánh địa Vatican.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 36,
    title: '⚖️ Điện Công Lý',
    question: 'Chủ thể nào có vai trò quyết định trong việc quản lý và thực hiện chính sách tôn giáo ở Việt Nam?',
    answers: [
      'Các tổ chức phi chính phủ quốc tế.',
      'Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam.',
      'Giáo hội của các tôn giáo lớn.',
      'Các hiệp hội văn hóa nghệ thuật.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 37,
    title: '📜 Sách Cổ Ngàn Năm',
    question: 'Quyền tự do tín ngưỡng, tôn giáo của công dân Việt Nam được quy định cụ thể nhất trong luật nào dưới đây?',
    answers: [
      'Luật Di sản văn hóa.',
      'Luật Giáo dục.',
      'Luật Tín ngưỡng, tôn giáo năm 2016.',
      'Luật Hình sự Việt Nam.'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 38,
    title: '🤝 Cây Cầu Đoàn Kết',
    question: 'Để tăng cường khối đại đoàn kết toàn dân tộc, Đảng ta chủ trương đoàn kết giữa những đối tượng nào?',
    answers: [
      'Chỉ đoàn kết đồng bào theo Phật giáo và Công giáo.',
      'Đồng bào có đạo và đồng bào không có đạo, giữa các tôn giáo khác nhau.',
      'Đồng bào theo tôn giáo ở trong nước với người nước ngoài.',
      'Chỉ đoàn kết những người thuộc tầng lớp trí thức của các tôn giáo.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 39,
    title: '👥 Đại Lộ Quần Chúng',
    question: 'Vì sao tôn giáo có tính quần chúng sâu sắc?',
    answers: [
      'Vì nó phản ánh khát vọng nhân đạo, hướng thiện và giải quyết nhu cầu tâm linh của hàng tỷ người trên thế giới.',
      'Vì mọi người dân đều bắt buộc phải gia nhập các tổ chức tôn giáo.',
      'Vì các buổi lễ tôn giáo thường được tổ chức tại sân vận động lớn.',
      'Vì chi phí tham gia sinh hoạt tôn giáo hoàn toàn miễn phí.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 40,
    title: '🧠 Thung Lũng Tư Duy',
    question: 'Nguồn gốc nhận thức của tôn giáo chỉ ra rằng, tôn giáo xuất hiện khi nhận thức của con người:',
    answers: [
      'Đã đạt đến trình độ giải thích tường tận tất cả các bí ẩn của vũ trụ.',
      'Chưa giải thích được bản chất các hiện tượng tự nhiên và xã hội phức tạp.',
      'Bị hạn chế do không có sách vở học tập.',
      'Hoàn toàn không có khả năng tư duy trừu tượng.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 41,
    title: '🏮 Phố Cổ Hội An',
    question: 'Một trong những đặc điểm của các tôn giáo ở Việt Nam là:',
    answers: [
      'Có sự đan xen, dung hòa văn hóa và rất ít khi xảy ra xung đột tôn giáo gay gắt.',
      'Các tôn giáo luôn có ranh giới địa lý cực kỳ rõ ràng, không đan xen.',
      'Mỗi tôn giáo đều tự xây dựng một hệ thống pháp luật riêng biệt.',
      'Tất cả tôn giáo đều từ chối tham gia các hoạt động từ thiện, xã hội.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 42,
    title: '🏫 Học Viện Tâm Linh',
    question: 'Chính sách của Nhà nước đối với việc đào tạo chức sắc, nhà tu hành của các tôn giáo là:',
    answers: [
      'Nghiêm cấm hoàn toàn, chỉ cho tự học tại nhà.',
      'Tạo điều kiện mở trường, lớp đào tạo theo quy định của pháp luật.',
      'Nhà nước tự đứng ra tổ chức giảng dạy giáo lý tôn giáo.',
      'Chỉ cho phép đào tạo tại nước ngoài.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 43,
    title: '🎯 Trọng Tâm Chiến Lược',
    question: 'Vấn đề dân tộc và tôn giáo có vị trí như thế nào trong sự nghiệp cách mạng của nước ta?',
    answers: [
      'Là vấn đề tạm thời, không quan trọng lắm.',
      'Có vị trí chiến lược quan trọng, liên quan đến sự thành bại của cách mạng.',
      'Chỉ có ý nghĩa trong giai đoạn đấu tranh giành độc lập trước đây.',
      'Chỉ cần giải quyết tốt ở vùng biên giới và hải đảo.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 44,
    title: '🔮 Gương Thần Phán Xét',
    question: 'Sự khác biệt lớn nhất giữa tôn giáo và mê tín dị đoan là gì?',
    answers: [
      'Tôn giáo là tổ chức có giáo lý, giáo luật được công nhận; mê tín dị đoan là niềm tin mù quáng, nhảm nhí gây hại xã hội.',
      'Tôn giáo có nhiều thần linh hơn mê tín dị đoan.',
      'Tôn giáo chỉ dành cho người giàu, mê tín dị đoan dành cho người nghèo.',
      'Tôn giáo không cần xây dựng cơ sở thờ tự, còn mê tín dị đoan thì ngược lại.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 45,
    title: '⌛ Thời Gian Thử Thách',
    question: 'Tại sao nói giải quyết vấn đề tôn giáo là một quá trình lâu dài?',
    answers: [
      'Vì niềm tin tôn giáo đã ăn sâu vào tâm lý, lối sống của người dân và gắn chặt với nhu cầu tinh thần của họ.',
      'Vì Nhà nước muốn kéo dài thời gian để thu thuế tôn giáo.',
      'Vì các tổ chức tôn giáo cố tình kéo dài thời gian đăng ký hoạt động.',
      'Vì trình độ dân trí của người dân không thể thay đổi được.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    timeLimit: 60,
  },
  {
    stationNumber: 46,
    title: '🛡️ Pháo Đài Phòng Thủ',
    question: 'Theo quan điểm của Đảng ta, lực lượng nào là nòng cốt trong việc thực hiện chính sách tôn giáo?',
    answers: [
      'Chỉ có lực lượng công an và quân đội nhân dân.',
      'Toàn bộ hệ thống chính trị dưới sự lãnh đạo của Đảng.',
      'Chỉ các vị chức sắc cao cấp đứng đầu các tôn giáo.',
      'Các hiệp hội doanh nghiệp tư nhân trong và ngoài nước.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 47,
    title: '🗺️ Ngã Ba Biên Giới',
    question: 'Sự đan xen giữa quan hệ dân tộc và tôn giáo thể hiện rõ nét nhất ở các vùng nào của nước ta?',
    answers: [
      'Vùng đồng bằng sông Hồng và ven biển miền Trung.',
      'Vùng Tây Bắc, Tây Nguyên và Tây Nam Bộ.',
      'Chỉ có ở các thành phố lớn như Hà Nội và TP.HCM.',
      'Vùng hải đảo xa xôi ngoài khơi Nam Trung Bộ.'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 48,
    title: '🎉 Lễ Hội Trống Đồng',
    question: 'Việc tổ chức các lễ hội tôn giáo truyền thống ở Việt Nam được Nhà nước đối xử như thế nào?',
    answers: [
      'Tôn trọng và tạo điều kiện thuận lợi để tổ chức lành mạnh, văn minh theo quy định pháp luật.',
      'Tuyệt đối cấm đoán vì lo ngại tụ tập đông người gây mất trật tự.',
      'Thu phí rất cao đối với mỗi người dân tham gia lễ hội.',
      'Yêu cầu thay đổi toàn bộ nội dung nghi lễ theo hướng hiện đại hóa.'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 45,
  },
  {
    stationNumber: 49,
    title: '📈 Biểu Đồ Phát Triển',
    question: 'Nhận định nào sau đây ĐÚNG về xu hướng biến đổi của tôn giáo ở Việt Nam hiện nay?',
    answers: [
      'Các tôn giáo ngày càng xa rời đời sống dân tộc và khép kín hoạt động.',
      'Các tôn giáo tiếp tục đồng hành cùng dân tộc và tích cực tham gia các hoạt động an sinh xã hội.',
      'Số lượng tín đồ tôn giáo ở Việt Nam đang sụt giảm nghiêm trọng tiến về không.',
      'Các tôn giáo đang có xu hướng sáp nhập lại thành một tôn giáo duy nhất.'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30,
  },
  {
    stationNumber: 50,
    title: '👑 Đền Thờ Vua Hùng',
    question: 'Đâu là yêu cầu hàng đầu khi thực hiện các hoạt động tôn giáo đối với các tổ chức tôn giáo ở Việt Nam?',
    answers: [
      'Phải có sự bảo hộ tài trợ kinh tế từ các tổ chức quốc tế.',
      'Tuân thủ Hiến pháp và pháp luật của Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam.',
      'Chỉ được sử dụng tiếng nước ngoài trong các nghi lễ thờ phụng.',
      'Phải thường xuyên thay đổi người đứng đầu cơ sở thờ tự.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60,
  },
];

export const TOTAL_STATIONS = MOCK_STATIONS.length;
