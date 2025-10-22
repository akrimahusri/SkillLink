import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'student' | 'client'>('student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    major: '',
    companyName: '',
    position: '',
    phone: '',
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    if (!formData.agree) {
      alert('Anda harus menyetujui syarat dan ketentuan');
      return;
    }
    console.log('Register:', { ...formData, userType });
    
    // Simulate registration success
    // In real app, you would send data to backend
    // Redirect based on user type
    if (userType === 'student') {
      navigate('/dashboard');
    } else {
      navigate('/client-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">SkillLink</h1>
          <p className="text-gray-600">Buat akun baru dan mulai perjalanan Anda</p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Daftar Sebagai</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUserType('student')}
              className={`p-6 border-2 rounded-xl transition ${
                userType === 'student'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center justify-center mb-3">
                <User className={`w-8 h-8 ${userType === 'student' ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 ${userType === 'student' ? 'text-blue-600' : 'text-gray-700'}`}>
                Mahasiswa
              </h3>
              <p className="text-sm text-gray-500">Cari proyek dan bangun portofolio</p>
              {userType === 'student' && (
                <div className="mt-3 flex justify-center">
                  <div className="bg-blue-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </button>

            <button
              type="button"
              onClick={() => setUserType('client')}
              className={`p-6 border-2 rounded-xl transition ${
                userType === 'client'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center justify-center mb-3">
                <Building className={`w-8 h-8 ${userType === 'client' ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 ${userType === 'client' ? 'text-blue-600' : 'text-gray-700'}`}>
                Klien
              </h3>
              <p className="text-sm text-gray-500">Post proyek dan temukan talenta</p>
              {userType === 'client' && (
                <div className="mt-3 flex justify-center">
                  <div className="bg-blue-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Nomor Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>

            {/* Conditional Fields - Student */}
            {userType === 'student' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="university" className="block text-sm font-semibold text-gray-700 mb-2">
                    Universitas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="university"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Nama universitas"
                    required={userType === 'student'}
                  />
                </div>
                <div>
                  <label htmlFor="major" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jurusan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="major"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Nama jurusan"
                    required={userType === 'student'}
                  />
                </div>
              </div>
            )}

            {/* Conditional Fields - Client */}
            {userType === 'client' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Perusahaan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Nama perusahaan"
                    required={userType === 'client'}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Posisi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Jabatan Anda"
                    required={userType === 'client'}
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Minimal 8 karakter"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Konfirmasi Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ulangi password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Syarat dan Ketentuan
                  </a>{' '}
                  serta{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Kebijakan Privasi
                  </a>{' '}
                  SkillLink
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center transition"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau daftar dengan</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{' '}
              <button onClick={() => navigate('/login')} className="text-blue-600 hover:text-blue-700 font-semibold">
                Masuk
              </button>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button onClick={() => navigate('/')} className="text-sm text-gray-600 hover:text-gray-900">
            ← Kembali ke beranda
          </button>
        </div>
      </div>
    </div>
  );
}
