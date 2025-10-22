import { useState } from 'react';
import { Home, Search, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, Plus, Eye, Edit, Trash2, ExternalLink, Calendar, Tag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  completedDate: string;
  client?: string;
}

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('portfolio');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample portfolio items
  const [portfolioItems] = useState<PortfolioItem[]>([
    {
      id: 1,
      title: 'E-Commerce Website Design',
      category: 'Web Design',
      description: 'Desain UI/UX untuk website e-commerce fashion dengan fokus pada user experience dan modern interface.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['UI/UX', 'Figma', 'Web Design', 'E-Commerce'],
      link: 'https://figma.com/sample',
      completedDate: 'Januari 2025',
      client: 'Fashion Hub'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi. Dibangun dengan React Native.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Mobile App', 'FinTech', 'UI/UX'],
      link: 'https://github.com/sample',
      completedDate: 'Desember 2024',
      client: 'Bank Digital'
    },
    {
      id: 3,
      title: 'Brand Identity - Tech Startup',
      category: 'Graphic Design',
      description: 'Complete brand identity untuk startup teknologi, termasuk logo, color palette, typography, dan brand guidelines.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      tags: ['Branding', 'Logo Design', 'Illustrator', 'Brand Guidelines'],
      completedDate: 'November 2024',
      client: 'TechStart Indonesia'
    },
    {
      id: 4,
      title: 'Food Delivery Dashboard',
      category: 'Web Development',
      description: 'Dashboard admin untuk aplikasi food delivery dengan analytics, order management, dan real-time tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React.js', 'Dashboard', 'Analytics', 'TypeScript'],
      link: 'https://demo.fooddelivery.com',
      completedDate: 'Oktober 2024',
      client: 'FoodGo'
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'Kampanye social media untuk produk kecantikan dengan engagement rate 15% dan reach 500K+.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
      tags: ['Instagram', 'Content Strategy', 'Social Media', 'Marketing'],
      completedDate: 'September 2024',
      client: 'Beauty Brand'
    },
    {
      id: 6,
      title: 'Educational Platform Website',
      category: 'Web Development',
      description: 'Platform pembelajaran online dengan fitur video courses, quiz, dan progress tracking untuk siswa.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Education', 'Web App', 'Video Streaming'],
      link: 'https://eduplatform.com',
      completedDate: 'Agustus 2024',
      client: 'EduLearn'
    }
  ]);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  const categories = [
    'all',
    'Web Development',
    'Mobile Development',
    'Web Design',
    'Graphic Design',
    'Digital Marketing',
    'Content Writing',
    'Video Editing'
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/dashboard');
    } else if (menuId === 'cari-proyek') {
      navigate('/browse-projects');
    } else if (menuId === 'proyek-saya') {
      navigate('/my-projects');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Web Development': 'bg-blue-100 text-blue-700',
      'Mobile Development': 'bg-green-100 text-green-700',
      'Web Design': 'bg-purple-100 text-purple-700',
      'Graphic Design': 'bg-pink-100 text-pink-700',
      'Digital Marketing': 'bg-orange-100 text-orange-700',
      'Content Writing': 'bg-yellow-100 text-yellow-700',
      'Video Editing': 'bg-red-100 text-red-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
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
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Saya</h2>
              <p className="text-sm text-gray-500 mt-1">Tampilkan karya terbaik Anda</p>
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
          {/* Action Bar */}
          <div className="mb-6 flex justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {cat === 'all' ? 'Semua' : cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium flex items-center shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Tambah Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">{portfolioItems.length}</div>
              <div className="text-sm text-gray-600">Total Karya</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Proyek Selesai</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
              <div className="text-sm text-gray-600">Rating Rata-rata</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">850</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-3 gap-6">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                {/* Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-700" />
                        </a>
                      )}
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <Edit className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.completedDate}
                    </div>
                    {item.client && (
                      <div className="flex items-center text-xs text-gray-500">
                        <Tag className="w-4 h-4 mr-1" />
                        {item.client}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Belum Ada Portfolio</h3>
              <p className="text-gray-600 mb-6">Mulai tambahkan karya terbaik Anda untuk menarik klien</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium inline-flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Tambah Portfolio
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Portfolio Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Tambah Portfolio Baru</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Judul Proyek *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan judul proyek"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Pilih Kategori</option>
                    {categories.filter(c => c !== 'all').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jelaskan tentang proyek ini..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Gambar *</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Link Project (opsional)</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (pisahkan dengan koma)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="React, UI/UX, Web Design"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Klien (opsional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama perusahaan atau klien"
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Simpan Portfolio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
