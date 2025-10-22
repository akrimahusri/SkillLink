import { useState, useEffect } from 'react';
import { Home, Search, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, Clock, CheckCircle, XCircle, Eye, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Application {
  id: number;
  projectId: number;
  projectTitle: string;
  projectBudget?: string;
  coverLetter: string;
  estimatedTime: string;
  proposedBudget: string;
  portfolio: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedDate: string;
  clientName?: string;
}

export default function MyApplications() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('applications');
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  useEffect(() => {
    // Load applications from localStorage
    const savedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    setApplications(savedApplications);
  }, []);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/dashboard');
    } else if (menuId === 'cari-proyek') {
      navigate('/browse-projects');
    } else if (menuId === 'proyek-saya') {
      navigate('/my-projects');
    } else if (menuId === 'portfolio') {
      navigate('/portfolio');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleDeleteApplication = (applicationId: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus lamaran ini?')) {
      const updatedApplications = applications.filter(app => app.id !== applicationId);
      setApplications(updatedApplications);
      localStorage.setItem('applications', JSON.stringify(updatedApplications));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3 mr-1" />
            Menunggu
          </span>
        );
      case 'accepted':
        return (
          <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
            <CheckCircle className="w-3 h-3 mr-1" />
            Diterima
          </span>
        );
      case 'rejected':
        return (
          <span className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
            <XCircle className="w-3 h-3 mr-1" />
            Ditolak
          </span>
        );
      default:
        return null;
    }
  };

  const filteredApplications = selectedStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === selectedStatus);

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length
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
              <h2 className="text-2xl font-bold text-gray-900">Lamaran Saya</h2>
              <p className="text-sm text-gray-500 mt-1">Kelola semua lamaran proyek Anda</p>
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
                  <div className="text-sm font-semibold text-gray-900">Anisa Ramadhani</div>
                  <div className="text-xs text-gray-500">Informatika</div>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AR
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
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Lamaran</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
              <div className="text-sm text-gray-600">Menunggu</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-1">{stats.accepted}</div>
              <div className="text-sm text-gray-600">Diterima</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-1">{stats.rejected}</div>
              <div className="text-sm text-gray-600">Ditolak</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`flex-1 px-6 py-4 text-sm font-medium ${
                  selectedStatus === 'all'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Semua ({stats.total})
              </button>
              <button
                onClick={() => setSelectedStatus('pending')}
                className={`flex-1 px-6 py-4 text-sm font-medium ${
                  selectedStatus === 'pending'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Menunggu ({stats.pending})
              </button>
              <button
                onClick={() => setSelectedStatus('accepted')}
                className={`flex-1 px-6 py-4 text-sm font-medium ${
                  selectedStatus === 'accepted'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Diterima ({stats.accepted})
              </button>
              <button
                onClick={() => setSelectedStatus('rejected')}
                className={`flex-1 px-6 py-4 text-sm font-medium ${
                  selectedStatus === 'rejected'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Ditolak ({stats.rejected})
              </button>
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Belum Ada Lamaran</h3>
                <p className="text-gray-600 mb-6">Mulai melamar proyek untuk membangun karir Anda</p>
                <button
                  onClick={() => navigate('/browse-projects')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium inline-flex items-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Cari Proyek
                </button>
              </div>
            ) : (
              filteredApplications.map(app => (
                <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{app.projectTitle}</h3>
                        {getStatusBadge(app.status)}
                      </div>
                      <p className="text-sm text-gray-500">
                        Dikirim pada {new Date(app.appliedDate).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Estimasi Waktu</div>
                      <div className="font-semibold text-gray-900">{app.estimatedTime}</div>
                    </div>
                    {app.proposedBudget && (
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Budget yang Diajukan</div>
                        <div className="font-semibold text-gray-900">{app.proposedBudget}</div>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Cover Letter:</div>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg line-clamp-3">
                      {app.coverLetter}
                    </p>
                  </div>

                  {app.portfolio && (
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Portfolio:</div>
                      <a 
                        href={app.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline flex items-center"
                      >
                        {app.portfolio}
                        <Eye className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  )}

                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => navigate(`/project/${app.projectId}`)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Lihat Proyek
                    </button>
                    {app.status === 'pending' && (
                      <button
                        onClick={() => handleDeleteApplication(app.id)}
                        className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Batalkan
                      </button>
                    )}
                    {app.status === 'accepted' && (
                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
                      >
                        Mulai Proyek
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
