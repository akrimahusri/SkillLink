import { useState, useEffect } from 'react';
import { Home, PlusCircle, Briefcase, FolderOpen, MessageSquare, User, LogOut, Eye, Edit, Trash2, Users, Clock, DollarSign, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  budget: string;
  deadline: string;
  description: string;
  skills: string[];
  applicants: number;
  status: string;
  postedDate: string;
  location: string;
}

// Default static projects - moved outside component
const defaultProjects: Project[] = [
  {
    id: 1001,
    title: 'Website E-Commerce Fashion',
    category: 'Web Development',
      budget: 'Rp 7.500.000',
      deadline: '1 bulan',
      description: 'Membutuhkan developer untuk membangun website e-commerce fashion dengan fitur lengkap seperti shopping cart, payment gateway, dan admin dashboard.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Stripe API'],
      applicants: 18,
      status: 'open',
      postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Remote'
    },
    {
      id: 1002,
      title: 'Aplikasi Mobile Tracking Pengiriman',
      category: 'Mobile Development',
      budget: 'Rp 10.000.000',
      deadline: '2 bulan',
      description: 'Develop aplikasi mobile untuk tracking pengiriman barang dengan real-time GPS tracking dan notifikasi push.',
      skills: ['React Native', 'Firebase', 'Google Maps API', 'Push Notification'],
      applicants: 12,
      status: 'in-progress',
      postedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Remote'
    },
    {
      id: 1003,
      title: 'Redesign Brand Identity',
      category: 'Graphic Design',
      budget: 'Rp 3.500.000',
      deadline: '2 minggu',
      description: 'Mencari designer untuk redesign logo, brand guideline, dan company profile perusahaan teknologi.',
      skills: ['Adobe Illustrator', 'Photoshop', 'Brand Design', 'Typography'],
      applicants: 25,
      status: 'open',
      postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Remote'
    },
    {
      id: 1004,
      title: 'Content Marketing & SEO',
      category: 'Digital Marketing',
      budget: 'Rp 4.000.000',
      deadline: '1 bulan',
      description: 'Dibutuhkan content writer dan SEO specialist untuk meningkatkan ranking website di Google dan membuat konten blog berkualitas.',
      skills: ['SEO', 'Content Writing', 'Google Analytics', 'Keyword Research'],
      applicants: 8,
      status: 'completed',
      postedDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Remote'
    },
    {
      id: 1005,
      title: 'Video Promosi Produk',
      category: 'Video Editing',
      budget: 'Rp 2.500.000',
      deadline: '1 minggu',
      description: 'Membuat video promosi produk dengan durasi 2-3 menit untuk keperluan social media marketing.',
      skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading'],
      applicants: 15,
      status: 'in-progress',
      postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Hybrid - Jakarta'
    },
    {
      id: 1006,
      title: 'Dashboard Analytics Web App',
      category: 'Web Development',
      budget: 'Rp 12.000.000',
      deadline: '3 bulan',
      description: 'Develop dashboard analytics dengan visualisasi data kompleks menggunakan chart dan grafik interaktif.',
      skills: ['React.js', 'D3.js', 'TypeScript', 'REST API'],
      applicants: 6,
      status: 'completed',
      postedDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Remote'
    }
  ];

export default function ClientProjects() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('my-projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<'open' | 'in-progress' | 'completed'>('open');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'post-project', name: 'Post Proyek', icon: PlusCircle },
    { id: 'my-projects', name: 'Proyek Saya', icon: Briefcase },
    { id: 'applications', name: 'Aplikasi Masuk', icon: FolderOpen },
    { id: 'messages', name: 'Pesan', icon: MessageSquare },
    { id: 'profile', name: 'Profil', icon: User }
  ];

  useEffect(() => {
    // Load projects from localStorage and merge with default projects
    const storedProjects = JSON.parse(localStorage.getItem('postedProjects') || '[]');
    // Combine default projects with stored projects
    const allProjects = [...defaultProjects, ...storedProjects];
    setProjects(allProjects);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/client-dashboard');
    } else if (menuId === 'post-project') {
      navigate('/post-project');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleDeleteProject = (projectId: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      setProjects(updatedProjects);
      localStorage.setItem('postedProjects', JSON.stringify(updatedProjects));
    }
  };

  const handleViewApplications = (_projectId: number) => {
    // Navigate to applications page
    alert('Fitur melihat aplikasi akan segera hadir!');
  };

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

  const getFilteredProjects = () => {
    return projects.filter(project => project.status === activeTab);
  };

  const filteredProjects = getFilteredProjects();

  const getProjectCount = (status: string) => {
    return projects.filter(p => p.status === status).length;
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
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Proyek Saya</h2>
              <p className="text-sm text-gray-500 mt-1">Kelola semua proyek yang Anda posting</p>
            </div>
            <button
              onClick={() => navigate('/post-project')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium flex items-center shadow-lg"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Post Proyek Baru
            </button>
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
              <div className="text-3xl font-bold text-gray-900">{projects.length}</div>
              <p className="text-xs text-gray-500 mt-2">Semua proyek</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Terbuka</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900">{getProjectCount('open')}</div>
              <p className="text-xs text-gray-500 mt-2">Menerima aplikasi</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Berjalan</h3>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900">{getProjectCount('in-progress')}</div>
              <p className="text-xs text-gray-500 mt-2">Sedang dikerjakan</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Selesai</h3>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900">{getProjectCount('completed')}</div>
              <p className="text-xs text-gray-500 mt-2">Proyek selesai</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('open')}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                    activeTab === 'open'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Terbuka ({getProjectCount('open')})
                </button>
                <button
                  onClick={() => setActiveTab('in-progress')}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                    activeTab === 'in-progress'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Berjalan ({getProjectCount('in-progress')})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                    activeTab === 'completed'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Selesai ({getProjectCount('completed')})
                </button>
              </div>
            </div>

            {/* Projects List */}
            <div className="p-6">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tidak ada proyek {activeTab === 'open' ? 'terbuka' : activeTab === 'in-progress' ? 'berjalan' : 'selesai'}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {activeTab === 'open' ? 'Mulai posting proyek baru untuk mendapatkan talenta terbaik' : 'Tidak ada proyek dalam kategori ini'}
                  </p>
                  {activeTab === 'open' && (
                    <button
                      onClick={() => navigate('/post-project')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium inline-flex items-center"
                    >
                      <PlusCircle className="w-5 h-5 mr-2" />
                      Post Proyek Baru
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                            {getStatusBadge(project.status)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Diposting {new Date(project.postedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <span>•</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.slice(0, 5).map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 5 && (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            +{project.skills.length - 5} lainnya
                          </span>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="grid grid-cols-4 gap-4 mb-4 pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Budget</div>
                          <div className="font-bold text-gray-900 text-sm flex items-center">
                            <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                            {project.budget}
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
                          <div className="text-xs text-gray-500 mb-1">Lokasi</div>
                          <div className="font-bold text-gray-900 text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-purple-600" />
                            {project.location}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Pelamar</div>
                          <div className="font-bold text-gray-900 text-sm flex items-center">
                            <Users className="w-4 h-4 mr-1 text-blue-600" />
                            {project.applicants} mahasiswa
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t border-gray-200">
                        <button
                          onClick={() => handleViewApplications(project.id)}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center"
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Lihat Aplikasi ({project.applicants})
                        </button>
                        <button
                          onClick={() => navigate(`/project/${project.id}`)}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Detail
                        </button>
                        <button
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium flex items-center"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 font-medium flex items-center"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
