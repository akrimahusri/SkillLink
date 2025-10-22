import { useState, useEffect } from 'react';
import { Search, MapPin, Clock, DollarSign, Users, Bookmark, BookmarkCheck, Briefcase, Code, Palette, PenTool, Camera, TrendingUp, Home, FolderOpen, MessageSquare, User, LogOut, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BrowseProjects() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('cari-proyek');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDeadline, setSelectedDeadline] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedProjects, setSavedProjects] = useState<number[]>([]);
  const [postedProjects, setPostedProjects] = useState<any[]>([]);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: Briefcase },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'writing', name: 'Writing', icon: PenTool },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'photography', name: 'Photography', icon: Camera }
  ];

  const projects = [
    {
      id: 1,
      title: 'Desain UI/UX untuk Aplikasi Mobile E-Commerce',
      category: 'design',
      description: 'Membutuhkan designer untuk membuat desain antarmuka aplikasi e-commerce yang modern dan user-friendly. Termasuk wireframe, mockup, dan prototype interaktif.',
      budget: 'Rp 2.500.000',
      budgetType: 'fixed',
      deadline: '2 minggu',
      location: 'Remote',
      applicants: 12,
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      requirements: [
        'Minimal 1 tahun pengalaman UI/UX design',
        'Portofolio aplikasi mobile',
        'Menguasai Figma dan Adobe XD',
        'Dapat berkomunikasi dengan baik'
      ],
      client: 'PT Maju Jaya',
      clientName: 'PT Maju Jaya',
      clientCompany: 'E-Commerce Company',
      clientRating: 4.8,
      clientProjects: 15,
      postedDate: '2 hari yang lalu',
      urgent: false
    },
    {
      id: 2,
      title: 'Pengembangan Website Company Profile dengan React',
      category: 'development',
      description: 'Dibutuhkan developer untuk membuat website company profile yang responsive dan modern. Harus menggunakan React.js dan memiliki admin panel untuk update konten.',
      budget: 'Rp 5.000.000',
      budgetType: 'fixed',
      deadline: '1 bulan',
      location: 'Remote',
      applicants: 8,
      skills: ['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      requirements: [
        'Pengalaman minimal 2 tahun React.js',
        'Familiar dengan REST API',
        'Dapat membuat responsive design',
        'Pengalaman dengan CMS'
      ],
      client: 'CV Digital Kreatif',
      clientName: 'CV Digital Kreatif',
      clientCompany: 'Digital Agency',
      clientRating: 4.9,
      clientProjects: 23,
      postedDate: '1 hari yang lalu',
      urgent: true
    },
    {
      id: 3,
      title: 'Content Writing untuk Blog SEO',
      category: 'writing',
      description: 'Mencari content writer untuk membuat 10 artikel blog dengan topik teknologi dan bisnis. Artikel harus SEO-friendly dan engaging.',
      budget: 'Rp 1.500.000',
      budgetType: 'fixed',
      deadline: '2 minggu',
      location: 'Remote',
      applicants: 15,
      skills: ['SEO Writing', 'Content Strategy', 'Research', 'Copywriting'],
      requirements: [
        'Pengalaman menulis artikel SEO',
        'Familiar dengan keyword research',
        'Gaya penulisan engaging',
        'Dapat deadline tepat waktu'
      ],
      client: 'Tech Blog Indonesia',
      clientName: 'Tech Blog Indonesia',
      clientCompany: 'Media Online',
      clientRating: 4.7,
      clientProjects: 12,
      postedDate: '3 hari yang lalu',
      urgent: false
    },
    {
      id: 4,
      title: 'Social Media Marketing untuk Brand Fashion',
      category: 'marketing',
      description: 'Dibutuhkan social media specialist untuk mengelola Instagram dan TikTok brand fashion. Termasuk pembuatan konten, copywriting, dan analisis engagement.',
      budget: 'Rp 3.000.000',
      budgetType: 'monthly',
      deadline: '3 bulan',
      location: 'Hybrid - Jakarta',
      applicants: 10,
      skills: ['Instagram Marketing', 'TikTok', 'Content Creation', 'Canva'],
      requirements: [
        'Pengalaman mengelola sosial media brand',
        'Kreatif dalam membuat konten',
        'Paham analytics dan insights',
        'Dapat bekerja dengan target'
      ],
      client: 'Fashion Hub',
      clientName: 'Fashion Hub',
      clientCompany: 'Fashion Brand',
      clientRating: 4.6,
      clientProjects: 8,
      postedDate: '1 hari yang lalu',
      urgent: false
    },
    {
      id: 5,
      title: 'Logo Design dan Brand Identity untuk Startup',
      category: 'design',
      description: 'Startup teknologi membutuhkan logo dan brand identity yang profesional. Deliverables: logo variations, color palette, typography, dan brand guidelines.',
      budget: 'Rp 2.000.000',
      budgetType: 'fixed',
      deadline: '1 minggu',
      location: 'Remote',
      applicants: 20,
      skills: ['Illustrator', 'Photoshop', 'Brand Design', 'Typography'],
      requirements: [
        'Portfolio logo design minimal 5 project',
        'Menguasai Adobe Illustrator',
        'Paham brand identity',
        'Dapat presentasi konsep dengan baik'
      ],
      client: 'TechStart Indonesia',
      clientName: 'TechStart Indonesia',
      clientCompany: 'Tech Startup',
      clientRating: 5.0,
      clientProjects: 3,
      postedDate: '4 hari yang lalu',
      urgent: true
    },
    {
      id: 6,
      title: 'Mobile App Development - Aplikasi Edukasi',
      category: 'development',
      description: 'Membangun aplikasi mobile edukasi untuk anak-anak menggunakan React Native. Fitur: video learning, quiz interaktif, progress tracking.',
      budget: 'Rp 8.000.000',
      budgetType: 'fixed',
      deadline: '2 bulan',
      location: 'Remote',
      applicants: 5,
      skills: ['React Native', 'Firebase', 'UI/UX', 'API Integration'],
      requirements: [
        'Pengalaman React Native minimal 2 tahun',
        'Pernah membuat aplikasi edukasi',
        'Familiar dengan Firebase',
        'Dapat bekerja dalam tim'
      ],
      client: 'EduKids Platform',
      clientName: 'EduKids Platform',
      clientCompany: 'Education Technology',
      clientRating: 4.9,
      clientProjects: 10,
      postedDate: '5 hari yang lalu',
      urgent: false
    }
  ];

  // Load projects from localStorage and save default projects
  useEffect(() => {
    // Save default projects to localStorage if not exists
    const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    if (existingProjects.length === 0) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
    
    const storedProjects = JSON.parse(localStorage.getItem('postedProjects') || '[]');
    setPostedProjects(storedProjects);
  }, []);

  // Combine default projects with posted projects
  const allProjects = [...projects, ...postedProjects.map(p => ({
    ...p,
    budgetType: 'fixed',
    location: 'Remote',
    applicants: p.applicants || 0,
    clientRating: 5.0,
    postedDate: new Date(p.postedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    urgent: false
  }))];

  const toggleSaveProject = (projectId: number) => {
    if (savedProjects.includes(projectId)) {
      setSavedProjects(savedProjects.filter(id => id !== projectId));
    } else {
      setSavedProjects([...savedProjects, projectId]);
    }
  };

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/dashboard');
    } else if (menuId === 'proyek-saya') {
      navigate('/my-projects');
    } else if (menuId === 'portfolio') {
      navigate('/portfolio');
    }
  };

  const handleLogout = () => {
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
              <h2 className="text-2xl font-bold text-gray-900">Cari Proyek</h2>
              <p className="text-sm text-gray-500 mt-1">Temukan proyek yang sesuai dengan keahlian Anda</p>
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
            {/* Search Bar & Filters */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              {/* Search Bar */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari proyek berdasarkan judul atau deskripsi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                  Cari
                </button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upah</label>
                  <select 
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">Semua Upah</option>
                    <option value="low">Kurang dari Rp 1jt</option>
                    <option value="medium">Rp 1jt - Rp 5jt</option>
                    <option value="high">Lebih dari Rp 5jt</option>
                  </select>
                </div>

                {/* Deadline Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Deadline</label>
                  <select 
                    value={selectedDeadline}
                    onChange={(e) => setSelectedDeadline(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">Semua Deadline</option>
                    <option value="urgent">Kurang dari 1 minggu</option>
                    <option value="short">1-2 minggu</option>
                    <option value="medium">2 minggu - 1 bulan</option>
                    <option value="long">Lebih dari 1 bulan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Menampilkan <span className="font-semibold text-gray-900">{filteredProjects.length}</span> proyek
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                <option>Terbaru</option>
                <option>Budget Tertinggi</option>
                <option>Deadline Terdekat</option>
                <option>Paling Populer</option>
              </select>
            </div>

            {/* Project List */}
            <div className="space-y-4">
                  {filteredProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            {project.urgent && (
                              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                                URGENT
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {project.postedDate}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {project.applicants} pelamar
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleSaveProject(project.id)}
                          className="text-gray-400 hover:text-blue-600"
                        >
                          {savedProjects.includes(project.id) ? (
                            <BookmarkCheck className="w-6 h-6 fill-blue-600 text-blue-600" />
                          ) : (
                            <Bookmark className="w-6 h-6" />
                          )}
                        </button>
                      </div>

                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills && project.skills.map((skill: string, index: number) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-6">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Budget</div>
                            <div className="font-bold text-gray-900 flex items-center">
                              <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                              {project.budget}
                              {project.budgetType === 'monthly' && <span className="text-sm text-gray-500 ml-1">/bulan</span>}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Deadline</div>
                            <div className="font-bold text-gray-900">{project.deadline}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Klien</div>
                            <div className="font-bold text-gray-900 flex items-center">
                              {project.client}
                              <span className="ml-2 text-yellow-500 flex items-center text-sm">
                                ⭐ {project.clientRating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="flex-1 bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 font-medium"
                          >
                            Lihat Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  Sebelumnya
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  Selanjutnya
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
