import { useState } from 'react';
import { Home, PlusCircle, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, TrendingUp, Clock, DollarSign, Users, Eye, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'post-project', name: 'Post Proyek', icon: PlusCircle },
    { id: 'my-projects', name: 'Proyek Saya', icon: Briefcase },
    { id: 'applications', name: 'Aplikasi Masuk', icon: FolderOpen },
    { id: 'messages', name: 'Pesan', icon: MessageSquare },
    { id: 'profile', name: 'Profil', icon: User }
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'post-project') {
      navigate('/post-project');
    } else if (menuId === 'my-projects') {
      navigate('/client-projects');
    } else if (menuId === 'applications') {
      navigate('/incoming-applications');
    } else if (menuId === 'profile') {
      navigate('/client-profile');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const activeProjects = [
    {
      id: 1,
      title: 'Desain UI/UX Aplikasi Mobile',
      budget: 'Rp 2.500.000',
      applicants: 12,
      status: 'open',
      deadline: '5 hari lagi',
      postedDate: '2 hari yang lalu',
      hired: 1
    },
    {
      id: 2,
      title: 'Website Company Profile',
      budget: 'Rp 5.000.000',
      applicants: 8,
      status: 'in-progress',
      deadline: '1 bulan lagi',
      postedDate: '1 minggu yang lalu',
      hired: 1
    },
    {
      id: 3,
      title: 'Content Writing Blog SEO',
      budget: 'Rp 1.500.000',
      applicants: 15,
      status: 'open',
      deadline: '2 minggu lagi',
      postedDate: '3 hari yang lalu',
      hired: 0
    }
  ];

  const recentApplications = [
    {
      id: 1,
      studentName: 'Akrimah Usri',
      university: 'Universitas Syiah Kuala',
      major: 'Informatika',
      projectTitle: 'Desain UI/UX Aplikasi Mobile',
      rating: 4.9,
      completedProjects: 12,
      appliedDate: '2 jam yang lalu',
      avatar: 'AU'
    },
    {
      id: 2,
      studentName: 'Budi Santoso',
      university: 'Universitas Indonesia',
      major: 'Desain Komunikasi Visual',
      projectTitle: 'Desain UI/UX Aplikasi Mobile',
      rating: 4.8,
      completedProjects: 8,
      appliedDate: '5 jam yang lalu',
      avatar: 'BS'
    },
    {
      id: 3,
      studentName: 'Citra Dewi',
      university: 'Institut Teknologi Bandung',
      major: 'Teknik Informatika',
      projectTitle: 'Content Writing Blog SEO',
      rating: 5.0,
      completedProjects: 15,
      appliedDate: '1 hari yang lalu',
      avatar: 'CD'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Terbuka</span>;
      case 'in-progress':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Berjalan</span>;
      case 'completed':
        return <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Selesai</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>SkillLink</h1>
          <p className="text-xs text-gray-500 mt-1">Klien</p>
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
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Klien</h2>
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
                  <div className="text-sm font-semibold text-gray-900">PT Digital Kreatif</div>
                  <div className="text-xs text-gray-500">Perusahaan</div>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  DK
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Quick Action */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/post-project')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 font-semibold flex items-center shadow-lg"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Post Proyek Baru
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Proyek Aktif</h3>
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <p className="text-xs text-gray-500 mt-2">Sedang berjalan</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Aplikasi Baru</h3>
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">35</div>
              <p className="text-xs text-green-600 mt-2">+12 hari ini</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Pengeluaran</h3>
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">Rp 9jt</div>
              <p className="text-xs text-gray-500 mt-2">Bulan ini</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Proyek Selesai</h3>
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">8</div>
              <p className="text-xs text-gray-500 mt-2">Total semua</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Active Projects */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Proyek Aktif</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Lihat Semua
                </button>
              </div>

              <div className="space-y-4">
                {activeProjects.map(project => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{project.title}</h4>
                          {getStatusBadge(project.status)}
                        </div>
                        <p className="text-sm text-gray-500">Diposting {project.postedDate}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Budget</div>
                        <div className="font-bold text-gray-900 text-sm">{project.budget}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Pelamar</div>
                        <div className="font-bold text-gray-900 text-sm flex items-center">
                          <Users className="w-4 h-4 mr-1 text-blue-600" />
                          {project.applicants}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Deadline</div>
                        <div className="font-bold text-gray-900 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-orange-600" />
                          {project.deadline}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Diterima</div>
                        <div className="font-bold text-gray-900 text-sm">{project.hired} mahasiswa</div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-3 border-t border-gray-200">
                      <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-1" />
                        Lihat
                      </button>
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                        Kelola Aplikasi ({project.applicants})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Applications */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Aplikasi Terbaru</h3>
                <div className="space-y-4">
                  {recentApplications.map(app => (
                    <div key={app.id} className="border-l-4 border-blue-500 pl-3 py-2 hover:bg-blue-50 rounded-r transition cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                            {app.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{app.studentName}</h4>
                            <p className="text-xs text-gray-500">{app.university}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-yellow-500 text-xs">
                          ⭐ {app.rating}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">"{app.projectTitle}"</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">{app.appliedDate}</span>
                        <span className="text-blue-600 font-medium">{app.completedProjects} proyek</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium text-center">
                  Lihat Semua Aplikasi →
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-bold">Statistik Bulan Ini</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100 text-sm">Proyek Diposting</span>
                    <span className="font-bold text-lg">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100 text-sm">Total Aplikasi</span>
                    <span className="font-bold text-lg">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100 text-sm">Rata-rata Rating</span>
                    <span className="font-bold text-lg">4.8 ⭐</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100 text-sm">Response Rate</span>
                    <span className="font-bold text-lg">95%</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Tips</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Tulis deskripsi proyek yang jelas dan detail</p>
                  <p>• Tetapkan budget yang realistis</p>
                  <p>• Respons cepat meningkatkan rating Anda</p>
                  <p>• Berikan feedback setelah proyek selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
