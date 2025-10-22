import { useState } from 'react';
import { Home, Search, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, Clock, DollarSign, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyProjects() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('proyek-saya');
  const [activeTab, setActiveTab] = useState('active');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'Desain UI/UX Aplikasi Mobile',
      client: 'PT Digital Kreatif',
      budget: 'Rp 2.500.000',
      progress: 65,
      status: 'in-progress',
      deadline: '5 hari lagi',
      startDate: '10 Okt 2025',
      description: 'Membuat desain antarmuka untuk aplikasi mobile e-commerce'
    },
    {
      id: 2,
      title: 'Website Company Profile',
      client: 'CV Maju Bersama',
      budget: 'Rp 3.000.000',
      progress: 90,
      status: 'review',
      deadline: '2 hari lagi',
      startDate: '5 Okt 2025',
      description: 'Pembuatan website company profile dengan React.js'
    },
    {
      id: 3,
      title: 'Content Writing Blog',
      client: 'Tech Blog Indonesia',
      budget: 'Rp 1.500.000',
      progress: 25,
      status: 'started',
      deadline: '10 hari lagi',
      startDate: '18 Okt 2025',
      description: 'Menulis 10 artikel blog tentang teknologi dan bisnis'
    }
  ];

  const completedProjects = [
    {
      id: 4,
      title: 'Logo Design untuk Startup',
      client: 'TechStart Indonesia',
      budget: 'Rp 2.000.000',
      rating: 5.0,
      completedDate: '15 Sep 2025',
      review: 'Hasil sangat memuaskan! Profesional dan tepat waktu.'
    },
    {
      id: 5,
      title: 'Social Media Management',
      client: 'Fashion Hub',
      budget: 'Rp 3.000.000',
      rating: 4.8,
      completedDate: '1 Sep 2025',
      review: 'Kerja bagus, engagement meningkat signifikan.'
    },
    {
      id: 6,
      title: 'Landing Page Design',
      client: 'Startup XYZ',
      budget: 'Rp 1.800.000',
      rating: 4.9,
      completedDate: '20 Agu 2025',
      review: 'Design modern dan responsive. Sangat puas!'
    }
  ];

  const pendingProjects = [
    {
      id: 7,
      title: 'Mobile App Development',
      client: 'EduKids Platform',
      budget: 'Rp 8.000.000',
      appliedDate: '20 Okt 2025',
      status: 'pending'
    },
    {
      id: 8,
      title: 'Brand Identity Design',
      client: 'Coffee Shop',
      budget: 'Rp 2.500.000',
      appliedDate: '19 Okt 2025',
      status: 'pending'
    }
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/dashboard');
    } else if (menuId === 'cari-proyek') {
      navigate('/browse-projects');
    } else if (menuId === 'portfolio') {
      navigate('/portfolio');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">In Progress</span>;
      case 'review':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Review</span>;
      case 'started':
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Started</span>;
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
              <h2 className="text-2xl font-bold text-gray-900">Proyek Saya</h2>
              <p className="text-sm text-gray-500 mt-1">Kelola semua proyek Anda di sini</p>
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
          <div className="max-w-6xl mx-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Proyek Aktif</h3>
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{activeProjects.length}</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Selesai</h3>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{completedProjects.length}</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Pending</h3>
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{pendingProjects.length}</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Proyek</h3>
                  <Briefcase className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {activeProjects.length + completedProjects.length + pendingProjects.length}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-2 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`px-6 py-3 font-medium transition ${
                    activeTab === 'active'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Aktif ({activeProjects.length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-6 py-3 font-medium transition ${
                    activeTab === 'completed'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Selesai ({completedProjects.length})
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-6 py-3 font-medium transition ${
                    activeTab === 'pending'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Pending ({pendingProjects.length})
                </button>
              </div>

              {/* Active Projects Tab */}
              {activeTab === 'active' && (
                <div className="space-y-4">
                  {activeProjects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            {getStatusBadge(project.status)}
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{project.client}</p>
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-6 text-sm">
                          <div>
                            <div className="text-gray-500 mb-1">Budget</div>
                            <div className="font-bold text-gray-900">{project.budget}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Deadline</div>
                            <div className="font-bold text-gray-900 flex items-center">
                              <Clock className="w-4 h-4 mr-1 text-red-500" />
                              {project.deadline}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Mulai</div>
                            <div className="font-bold text-gray-900">{project.startDate}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                            Detail
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                            Update Progress
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Completed Projects Tab */}
              {activeTab === 'completed' && (
                <div className="space-y-4">
                  {completedProjects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:border-green-300 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Selesai
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{project.client}</p>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <span className="text-2xl font-bold text-gray-900">{project.rating}</span>
                          <span className="text-xl">⭐</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 italic">"{project.review}"</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-6 text-sm">
                          <div>
                            <div className="text-gray-500 mb-1">Penghasilan</div>
                            <div className="font-bold text-green-600">{project.budget}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Selesai pada</div>
                            <div className="font-bold text-gray-900">{project.completedDate}</div>
                          </div>
                        </div>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pending Projects Tab */}
              {activeTab === 'pending' && (
                <div className="space-y-4">
                  {pendingProjects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:border-yellow-300 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              Menunggu
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{project.client}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-6 text-sm">
                          <div>
                            <div className="text-gray-500 mb-1">Budget</div>
                            <div className="font-bold text-gray-900">{project.budget}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 mb-1">Dilamar pada</div>
                            <div className="font-bold text-gray-900">{project.appliedDate}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium">
                            Batalkan
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                            Lihat Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
