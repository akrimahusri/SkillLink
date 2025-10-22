import { useState } from 'react';
import { Home, Briefcase, FileText, MessageSquare, User, LogOut, Bell, Camera, Mail, Phone, MapPin, Calendar, Building2, Globe, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ClientProfile() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'post-project', name: 'Post Proyek', icon: FileText },
    { id: 'my-projects', name: 'Proyek Saya', icon: Briefcase },
    { id: 'applications', name: 'Aplikasi Masuk', icon: Users },
    { id: 'messages', name: 'Pesan', icon: MessageSquare },
    { id: 'profile', name: 'Profil', icon: User }
  ];

  // Data profil klien
  const [profileData, setProfileData] = useState({
    accountType: 'individual', // 'individual', 'company', 'organization'
    name: 'Ahmad Rahman',
    companyName: '', // Optional - only for company/organization
    email: 'ahmad.rahman@email.com',
    phone: '+62 812-3456-7890',
    industry: 'Teknologi',
    location: 'Jakarta, Indonesia',
    website: '', // Optional
    joinDate: 'Maret 2023',
    description: 'Saya adalah seorang entrepreneur yang sedang mengembangkan startup di bidang teknologi. Mencari talenta muda yang berbakat untuk membantu mewujudkan visi bisnis saya.',
    interests: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Content Creation'],
    workPreferences: [
      'Kualitas dan Profesionalisme',
      'Komunikasi yang Baik',
      'Deadline Tepat Waktu',
      'Harga Kompetitif'
    ]
  });

  const [editData, setEditData] = useState(profileData);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    if (menuId === 'dashboard') {
      navigate('/client-dashboard');
    } else if (menuId === 'post-project') {
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

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    // Simpan ke localStorage
    localStorage.setItem('clientProfile', JSON.stringify(editData));
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
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
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
            <p className="text-sm text-gray-600 mt-1">Kelola informasi profil perusahaan Anda</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                {profileData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{profileData.name}</p>
                <p className="text-xs text-gray-600">Klien</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Profile Header Card */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative flex items-center space-x-6">
              <div className="relative">
                <img 
                  src="https://ui-avatars.com/api/?name=Digital+Solutions&background=fff&color=8b5cf6&size=120"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Camera size={20} className="text-purple-600" />
                  </button>
                )}
              </div>
              
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
                <p className="text-purple-100 mb-3">
                  {profileData.accountType === 'individual' && 'Klien Individual'}
                  {profileData.accountType === 'company' && (profileData.companyName || 'Perusahaan')}
                  {profileData.accountType === 'organization' && (profileData.companyName || 'Organisasi')}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Bergabung {profileData.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 size={16} />
                    <span>{profileData.industry}</span>
                  </div>
                </div>
              </div>
              
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Edit Profil
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button 
                    onClick={handleSave}
                    className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Simpan
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="bg-purple-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Main Info */}
            <div className="col-span-2 space-y-6">
              {/* Tentang Saya/Perusahaan */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {profileData.accountType === 'individual' ? 'Tentang Saya' : 'Tentang Kami'}
                </h3>
                {!isEditing ? (
                  <p className="text-gray-600 leading-relaxed">{profileData.description}</p>
                ) : (
                  <textarea
                    value={editData.description}
                    onChange={(e) => setEditData({...editData, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={4}
                  />
                )}
              </div>

              {/* Informasi Profil */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Building2 size={24} className="text-purple-600" />
                  <span>Informasi Profil</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Tipe Akun</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1 capitalize">
                        {profileData.accountType === 'individual' && 'Individual'}
                        {profileData.accountType === 'company' && 'Perusahaan'}
                        {profileData.accountType === 'organization' && 'Organisasi'}
                      </p>
                    ) : (
                      <select
                        value={editData.accountType}
                        onChange={(e) => setEditData({...editData, accountType: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="individual">Individual</option>
                        <option value="company">Perusahaan</option>
                        <option value="organization">Organisasi</option>
                      </select>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Nama Lengkap</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.name}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    )}
                  </div>
                  {(editData.accountType === 'company' || editData.accountType === 'organization') && (
                    <div className="col-span-2">
                      <label className="text-sm text-gray-600 font-medium">
                        Nama {editData.accountType === 'company' ? 'Perusahaan' : 'Organisasi'}
                      </label>
                      {!isEditing ? (
                        <p className="text-gray-800 mt-1">{profileData.companyName || '-'}</p>
                      ) : (
                        <input
                          type="text"
                          value={editData.companyName}
                          onChange={(e) => setEditData({...editData, companyName: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder={`Masukkan nama ${editData.accountType === 'company' ? 'perusahaan' : 'organisasi'}`}
                        />
                      )}
                    </div>
                  )}
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Bidang/Industri</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.industry}</p>
                    ) : (
                      <select
                        value={editData.industry}
                        onChange={(e) => setEditData({...editData, industry: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option>Teknologi</option>
                        <option>E-Commerce</option>
                        <option>Pendidikan</option>
                        <option>Kesehatan</option>
                        <option>F&B</option>
                        <option>Fashion</option>
                        <option>Kreatif</option>
                        <option>Keuangan</option>
                        <option>Lainnya</option>
                      </select>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Lokasi</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.location}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.location}
                        onChange={(e) => setEditData({...editData, location: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Minat/Kebutuhan Proyek */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Minat Proyek</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      + Tambah Minat
                    </button>
                  )}
                </div>
              </div>

              {/* Preferensi Kerja */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <TrendingUp size={24} className="text-purple-600" />
                  <span>Preferensi Kerja Sama</span>
                </h3>
                <ul className="space-y-3">
                  {profileData.workPreferences.map((pref, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{pref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact & Stats */}
            <div className="space-y-6">
              {/* Informasi Kontak */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 font-medium">Email</label>
                      {!isEditing ? (
                        <p className="text-gray-800 break-words text-sm">{profileData.email}</p>
                      ) : (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({...editData, email: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 font-medium">Telepon</label>
                      {!isEditing ? (
                        <p className="text-gray-800">{profileData.phone}</p>
                      ) : (
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData({...editData, phone: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 font-medium">Lokasi</label>
                      {!isEditing ? (
                        <p className="text-gray-800">{profileData.location}</p>
                      ) : (
                        <input
                          type="text"
                          value={editData.location}
                          onChange={(e) => setEditData({...editData, location: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 font-medium">Website (Opsional)</label>
                      {!isEditing ? (
                        profileData.website ? (
                          <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                            {profileData.website}
                          </a>
                        ) : (
                          <p className="text-gray-800">-</p>
                        )
                      ) : (
                        <input
                          type="text"
                          value={editData.website}
                          onChange={(e) => setEditData({...editData, website: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="www.example.com"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistik */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Statistik</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Proyek Aktif</span>
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Total Proyek</span>
                    <span className="text-2xl font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Total Aplikasi</span>
                    <span className="text-2xl font-bold">35</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Total Investasi</span>
                    <span className="text-2xl font-bold">Rp 9jt</span>
                  </div>
                </div>
              </div>

              {/* Verifikasi */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Verifikasi</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">✓ Terverifikasi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Telepon</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">✓ Terverifikasi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Identitas</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">✓ Terverifikasi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}
