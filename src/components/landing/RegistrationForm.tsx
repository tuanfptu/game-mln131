'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface RegistrationFormProps {
  onSubmit: (name: string, mssv: string, classCode: string) => Promise<void>;
  isLoading: boolean;
}

export default function RegistrationForm({
  onSubmit,
  isLoading,
}: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [mssv, setMssv] = useState('');
  const [classCode, setClassCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Vui lòng nhập họ và tên';
    if (!mssv.trim()) newErrors.mssv = 'Vui lòng nhập MSSV';
    else if (!/^\w{5,10}$/.test(mssv.trim()))
      newErrors.mssv = 'MSSV phải từ 5-10 ký tự';
    if (!classCode.trim()) newErrors.classCode = 'Vui lòng nhập mã lớp';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await onSubmit(name.trim(), mssv.trim(), classCode.trim());
  };

  if (isLoading) {
    return (
      <Card variant="treasure" className="max-w-md mx-auto">
        <LoadingSpinner text="Đang khởi tạo hành trình..." />
      </Card>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-900 to-amber-950 px-4 py-12">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card variant="treasure" glowing className="relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-3 text-2xl opacity-40">🌿</div>
          <div className="absolute top-2 right-3 text-2xl opacity-40">🌿</div>
          <div className="absolute bottom-2 left-3 text-2xl opacity-40">💎</div>
          <div className="absolute bottom-2 right-3 text-2xl opacity-40">🪙</div>

          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-3"
            >
              🧰
            </motion.div>
            <h2 className="font-game text-2xl text-amber-900 mb-1">
              Đăng Ký Tham Gia
            </h2>
            <p className="font-body text-amber-700 text-sm">
              Nhập thông tin để bắt đầu hành trình
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                label="Họ và tên"
                icon="👤"
                placeholder="Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                label="MSSV"
                icon="🎓"
                placeholder="SE12345"
                value={mssv}
                onChange={(e) => setMssv(e.target.value)}
                required
              />
              {errors.mssv && (
                <p className="text-red-500 text-xs mt-1 font-body">{errors.mssv}</p>
              )}
            </div>

            <div>
              <Input
                label="Mã lớp"
                icon="🏫"
                placeholder="MLN131_01"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                required
              />
              {errors.classCode && (
                <p className="text-red-500 text-xs mt-1 font-body"
                >{errors.classCode}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                disabled={isLoading}
              >
                🚀 BẮT ĐẦU HÀNH TRÌNH
              </Button>
            </div>
          </form>

          {/* Footer tip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-amber-600/70 text-xs font-body mt-4"
          >
            💡 Mẹo: Trả lời nhanh và chính xác để đạt điểm cao!
          </motion.p>
        </Card>
      </motion.div>
    </div>
  );
}
