'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
}

export default function Input({ label, icon, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-amber-900 font-body">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </label>
      <input
        {...props}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/80 backdrop-blur-sm
          border-2 border-amber-300/50
          focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50
          outline-none transition-all duration-300
          text-gray-800 font-body text-base
          placeholder:text-amber-400/60
          hover:border-amber-400
          ${className}
        `}
      />
    </div>
  );
}
