import { useState, useEffect } from 'react';
import { Home, PlusCircle, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, Search, CheckCircle, XCircle, Clock, Eye, Mail, Phone, Star, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Application {
  id: number;
  projectId: number;
  projectTitle: string;
  studentName: string;
  studentUniversity: string;
  studentMajor: string;
  studentRating: number;
  studentCompletedProjects: number;
  coverLetter: string;
  estimatedTime: string;
  proposedBudget: string;
  portfolio: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedDate: string;
  studentAvatar: string;
  studentEmail?: string;
  studentPhone?: string;
}

export default function IncomingApplications() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('applications');
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Sample applications
  const sampleApplications: Application[] = [
    {
      id: 1,
      projectId: 1001,
      projectTitle: 'Website E-Commerce Fashion',
      studentName: 'Anisa Ramadhani',
      studentUniversity: 'Universitas Syiah Kuala',
      studentMajor: 'Informatika',
      studentRating: 4.9,
      studentCompletedProjects: 12,
      coverLetter: 'Saya sangat tertarik dengan proyek ini karena memiliki pengalaman 2 tahun dalam pengembangan e-commerce. Saya telah menyelesaikan 12 proyek serupa dengan rating tinggi. Saya yakin dapat menyelesaikan proyek ini dengan baik dan tepat waktu.',
      estimatedTime: '3 minggu',
      proposedBudget: 'Rp 7.500.000',
      portfolio: 'https://portfolio.anisa.com',
      status: 'pending',
      appliedDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      studentAvatar: 'AR',
      studentEmail: 'anisa.ramadhani@email.com',
      studentPhone: '+62 812-3456-7890'
    },
    {
      id: 2,
      projectId: 1001,
      projectTitle: 'Website E-Commerce Fashion',
      studentName: 'Budi Santoso',
      studentUniversity: 'Institut Teknologi Bandung',
      studentMajor: 'Teknik Informatika',
      studentRating: 4.8,
      studentCompletedProjects: 15,
      coverLetter: 'Dengan pengalaman mengembangkan 5+ website e-commerce menggunakan React dan Node.js, saya siap membantu mewujudkan visi Anda. Portfolio saya menunjukkan hasil kerja profesional dengan perhatian detail yang tinggi.',
      estimatedTime: '4 minggu',
      proposedBudget: 'Rp 7.000.000',
      portfolio: 'https://github.com/budisantoso',
      status: 'accepted',
      appliedDate: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      studentAvatar: 'BS',
      studentEmail: 'budi.santoso@email.com',
      studentPhone: '+62 813-9876-5432'
    },
    {
      id: 3,
      projectId: 1003,
      projectTitle: 'Redesign Brand Identity',
      studentName: 'Citra Dewi',
      studentUniversity: 'Universitas Indonesia',
      studentMajor: 'Desain Komunikasi Visual',
      studentRating: 5.0,
      studentCompletedProjects: 20,
      coverLetter: 'Sebagai desainer dengan spesialisasi brand identity, saya telah membantu 20+ brand menemukan identitas visual mereka. Saya percaya bahwa brand yang kuat dimulai dari desain yang memorable dan konsisten.',
      estimatedTime: '2 minggu',
      proposedBudget: 'Rp 3.500.000',
      portfolio: 'https://behance.net/citradewi',
      status: 'pending',
      appliedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      studentAvatar: 'CD',
      studentEmail: 'citra.dewi@email.com',
      studentPhone: '+62 821-1234-5678'
    },
    {
      id: 4,
      projectId: 1002,
      projectTitle: 'Aplikasi Mobile Tracking Pengiriman',
      studentName: 'Dimas Prasetyo',
      studentUniversity: 'Universitas Gadjah Mada',
      studentMajor: 'Ilmu Komputer',
      studentRating: 4.7,
      studentCompletedProjects: 8,
      coverLetter: 'Pengalaman saya dalam React Native dan integrasi Google Maps API sangat cocok untuk proyek tracking ini. Saya siap mengembangkan aplikasi dengan fitur real-time yang smooth dan reliable.',
      estimatedTime: '6 minggu',
      proposedBudget: 'Rp 9.500.000',
      portfolio: 'https://dimas-portfolio.com',
      status: 'pending',
      appliedDate: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      studentAvatar: 'DP',
      studentEmail: 'dimas.prasetyo@email.com',
      studentPhone: '+62 822-9988-7766'
    },
    {
      id: 5,
      projectId: 1001,
      projectTitle: 'Website E-Commerce Fashion',
      studentName: 'Eka Putri',
      studentUniversity: 'Universitas Brawijaya',
      studentMajor: 'Sistem Informasi',
      studentRating: 4.6,
      studentCompletedProjects: 10,
      coverLetter: 'Saya memiliki passion dalam menciptakan user experience yang menarik untuk e-commerce. Dengan background sistem informasi, saya memahami business logic dan technical implementation yang dibutuhkan.',
      estimatedTime: '3 minggu',
      proposedBudget: 'Rp 6.800.000',
      portfolio: 'https://ekaputri.dev',
      status: 'rejected',
      appliedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      studentAvatar: 'EP',
      studentEmail: 'eka.putri@email.com',
      studentPhone: '+62 823-5544-3322'
    }
  ];

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'post-project', name: 'Post Proyek', icon: PlusCircle },
    { id: 'my-projects', name: 'Proyek Saya', icon: Briefcase },
    { id: 'applications', name: 'Aplikasi Masuk', icon: FolderOpen },
    { id: 'messages', name: 'Pesan', icon: MessageSquare },
    { id: 'profile', name: 'Profil', icon: User }
  ];

  useEffect(() => {
    // Load applications from localStorage and merge with sample data
    const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    const allApplications = [...sampleApplications, ...storedApplications.map((app: any) => ({
      ...app,
      studentName: app.studentName || 'Mahasiswa',
      studentUniversity: 'Universitas',
      studentMajor: 'Informatika',
      studentRating: 4.5,
      studentCompletedProjects: 5,
      studentAvatar: (app.studentName || 'M').substring(0, 2).toUpperCase(),
      studentEmail: 'student@email.com',
      studentPhone: '+62 812-0000-0000'
    }))];
    setApplications(allApplications);
  }, []);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/client-dashboard');
    } else if (menuId === 'post-project') {
      navigate('/post-project');
    } else if (menuId === 'my-projects') {
      navigate('/client-projects');
    } else if (menuId === 'profile') {
      navigate('/client-profile');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleAcceptApplication = (applicationId: number) => {
    const updatedApplications = applications.map(app =>
      app.id === applicationId ? { ...app, status: 'accepted' as const } : app
    );
    setApplications(updatedApplications);
    // Update localStorage
    const storedApps = JSON.parse(localStorage.getItem('applications') || '[]');
    const updatedStored = storedApps.map((app: any) =>
      app.id === applicationId ? { ...app, status: 'accepted' } : app
    );
    localStorage.setItem('applications', JSON.stringify(updatedStored));
  };

  const handleRejectApplication = (applicationId: number) => {
    if (window.confirm('Apakah Anda yakin ingin menolak lamaran ini?')) {
      const updatedApplications = applications.map(app =>
        app.id === applicationId ? { ...app, status: 'rejected' as const } : app
      );
      setApplications(updatedApplications);
      // Update localStorage
      const storedApps = JSON.parse(localStorage.getItem('applications') || '[]');
      const updatedStored = storedApps.map((app: any) =>
        app.id === applicationId ? { ...app, status: 'rejected' } : app
      );
      localStorage.setItem('applications', JSON.stringify(updatedStored));
    }
  };

  const handleViewDetail = (application: Application) => {
    setSelectedApplication(application);
    setShowDetailModal(true);
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

  const filteredApplications = applications.filter(app => {
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
    const matchesSearch = app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.studentUniversity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>SkillLink</h1>
          <p className="text-xs text-gray-500 mt-1">Klien</p>
        </div>

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
              <h2 className="text-2xl font-bold text-gray-900">Aplikasi Masuk</h2>
              <p className="text-sm text-gray-500 mt-1">Kelola lamaran dari mahasiswa</p>
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
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Aplikasi</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
              <div className="text-sm text-gray-600">Menunggu Review</div>
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

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari nama mahasiswa, proyek, atau universitas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedStatus('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedStatus === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Semua ({stats.total})
                </button>
                <button
                  onClick={() => setSelectedStatus('pending')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedStatus === 'pending'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pending ({stats.pending})
                </button>
                <button
                  onClick={() => setSelectedStatus('accepted')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedStatus === 'accepted'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Diterima ({stats.accepted})
                </button>
                <button
                  onClick={() => setSelectedStatus('rejected')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedStatus === 'rejected'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Ditolak ({stats.rejected})
                </button>
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Belum Ada Aplikasi</h3>
                <p className="text-gray-600">Belum ada mahasiswa yang melamar ke proyek Anda</p>
              </div>
            ) : (
              filteredApplications.map(app => (
                <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                  <div className="flex gap-6">
                    {/* Student Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {app.studentAvatar}
                      </div>
                    </div>

                    {/* Application Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{app.studentName}</h3>
                          <p className="text-sm text-gray-600">{app.studentUniversity} - {app.studentMajor}</p>
                          <p className="text-sm text-blue-600 font-medium mt-1">Melamar: {app.projectTitle}</p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(app.status)}
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(app.appliedDate).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <div>
                            <div className="text-xs text-gray-500">Rating</div>
                            <div className="font-bold text-gray-900">{app.studentRating}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <div>
                            <div className="text-xs text-gray-500">Proyek Selesai</div>
                            <div className="font-bold text-gray-900">{app.studentCompletedProjects}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <div>
                            <div className="text-xs text-gray-500">Estimasi</div>
                            <div className="font-bold text-gray-900">{app.estimatedTime}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{app.coverLetter}</p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewDetail(app)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Lihat Detail
                        </button>
                        {app.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleAcceptApplication(app.id)}
                              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium flex items-center justify-center"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Terima
                            </button>
                            <button
                              onClick={() => handleRejectApplication(app.id)}
                              className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium flex items-center justify-center"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Tolak
                            </button>
                          </>
                        )}
                        {app.status === 'accepted' && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Hubungi
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Detail Lamaran</h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Student Info */}
              <div className="flex items-start gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {selectedApplication.studentAvatar}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{selectedApplication.studentName}</h4>
                  <p className="text-gray-600 mb-2">{selectedApplication.studentUniversity}</p>
                  <p className="text-sm text-gray-500">{selectedApplication.studentMajor}</p>
                  <div className="flex gap-4 mt-3">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-semibold">{selectedApplication.studentRating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {selectedApplication.studentCompletedProjects} proyek selesai
                    </div>
                  </div>
                </div>
                {getStatusBadge(selectedApplication.status)}
              </div>

              {/* Project Info */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Melamar untuk:</h5>
                <p className="text-lg font-bold text-blue-600">{selectedApplication.projectTitle}</p>
              </div>

              {/* Application Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Cover Letter</label>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedApplication.coverLetter}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Estimasi Waktu
                    </label>
                    <p className="text-gray-900 font-semibold bg-gray-50 p-3 rounded-lg">{selectedApplication.estimatedTime}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Proposed Budget
                    </label>
                    <p className="text-gray-900 font-semibold bg-gray-50 p-3 rounded-lg">{selectedApplication.proposedBudget}</p>
                  </div>
                </div>

                {selectedApplication.portfolio && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Portfolio</label>
                    <a
                      href={selectedApplication.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      {selectedApplication.portfolio}
                      <Eye className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Tanggal Melamar
                  </label>
                  <p className="text-gray-700">
                    {new Date(selectedApplication.appliedDate).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Informasi Kontak</h5>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{selectedApplication.studentEmail}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{selectedApplication.studentPhone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {selectedApplication.status === 'pending' && (
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      handleRejectApplication(selectedApplication.id);
                      setShowDetailModal(false);
                    }}
                    className="flex-1 px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 font-medium flex items-center justify-center"
                  >
                    <XCircle className="w-5 h-5 mr-2" />
                    Tolak Lamaran
                  </button>
                  <button
                    onClick={() => {
                      handleAcceptApplication(selectedApplication.id);
                      setShowDetailModal(false);
                    }}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Terima Lamaran
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
