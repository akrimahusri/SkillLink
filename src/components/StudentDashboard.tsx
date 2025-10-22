import { useState } from 'react';
import { Home, Search, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'cari-proyek') {
      navigate('/browse-projects');
    } else if (menuId === 'proyek-saya') {
      navigate('/my-projects');
    } else if (menuId === 'portfolio') {
      navigate('/portfolio');
    } else if (menuId === 'profil') {
      navigate('/student-profile');
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>SkillLink</h1>
          <p className="text-xs text-gray-500 mt-1">Mahasiswa</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition ${
                    activeMenu === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-sm text-gray-500 mt-1">Selamat datang kembali!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                  <Bell className="w-5 h-5 text-gray-600" />
                </div>
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">Akrimah Usri</div>
                  <div className="text-xs text-gray-500">Informatika USK</div>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AU
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Proyek</h3>
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">12</div>
              <p className="text-xs text-green-600 mt-2">+2 bulan ini</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Proyek Aktif</h3>
                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <p className="text-xs text-gray-500 mt-2">Sedang berjalan</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Penghasilan</h3>
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">Rp 8,5jt</div>
              <p className="text-xs text-green-600 mt-2">+15% dari bulan lalu</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Rating</h3>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <p className="text-xs text-gray-500 mt-2">Dari 12 review</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Proyek Aktif */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Proyek Aktif</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Lihat Semua
                </button>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Desain UI/UX Aplikasi Mobile</h4>
                      <p className="text-sm text-gray-500">PT Digital Kreatif</p>
                    </div>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      In Progress
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Deadline: 5 hari lagi
                    </div>
                    <span className="font-bold text-gray-900">Rp 2.500.000</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Website Company Profile</h4>
                      <p className="text-sm text-gray-500">CV Maju Bersama</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      Review
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span className="font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Deadline: 2 hari lagi
                    </div>
                    <span className="font-bold text-gray-900">Rp 3.000.000</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Content Writing Blog</h4>
                      <p className="text-sm text-gray-500">Tech Blog Indonesia</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Started
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Deadline: 10 hari lagi
                    </div>
                    <span className="font-bold text-gray-900">Rp 1.500.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Rekomendasi Proyek */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Rekomendasi Proyek</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3 cursor-pointer hover:bg-blue-50 p-2 rounded-r transition">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Logo Design Startup</h4>
                    <p className="text-xs text-gray-500 mb-2">Rp 2.000.000</p>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Lihat Detail →
                    </button>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 cursor-pointer hover:bg-green-50 p-2 rounded-r transition">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Mobile App Development</h4>
                    <p className="text-xs text-gray-500 mb-2">Rp 8.000.000</p>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Lihat Detail →
                    </button>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3 cursor-pointer hover:bg-purple-50 p-2 rounded-r transition">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Social Media Marketing</h4>
                    <p className="text-xs text-gray-500 mb-2">Rp 3.000.000</p>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Aktivitas Terbaru</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-sm text-gray-900">Proyek diselesaikan</p>
                      <p className="text-xs text-gray-500">2 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-sm text-gray-900">Pesan baru dari klien</p>
                      <p className="text-xs text-gray-500">5 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-sm text-gray-900">Aplikasi diterima</p>
                      <p className="text-xs text-gray-500">1 hari yang lalu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-bold">Performa Bulan Ini</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Proyek Selesai</span>
                    <span className="font-bold text-lg">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Jam Kerja</span>
                    <span className="font-bold text-lg">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Tingkat Respons</span>
                    <span className="font-bold text-lg">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
