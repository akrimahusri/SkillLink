import { useState } from 'react';
import { Home, Search, Briefcase, FolderOpen, MessageSquare, User, LogOut, Bell, Camera, Mail, Phone, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentProfile() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('profil');
  const [isEditing, setIsEditing] = useState(false);
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'cari-proyek', name: 'Cari Proyek', icon: Search },
    { id: 'proyek-saya', name: 'Proyek Saya', icon: Briefcase },
    { id: 'portfolio', name: 'Portfolio', icon: FolderOpen },
    { id: 'pesan', name: 'Pesan', icon: MessageSquare },
    { id: 'profil', name: 'Profil', icon: User }
  ];

  // Data profil mahasiswa
  const [profileData, setProfileData] = useState({
    name: 'Budi Santoso',
    email: 'budi.santoso@student.univ.ac.id',
    phone: '+62 812-3456-7890',
    university: 'Universitas Indonesia',
    major: 'Teknik Informatika',
    semester: '6',
    gpa: '3.75',
    location: 'Jakarta, Indonesia',
    joinDate: 'Januari 2024',
    bio: 'Mahasiswa Teknik Informatika yang passionate dalam web development dan UI/UX design. Memiliki pengalaman dalam berbagai proyek freelance dan aktif dalam organisasi kemahasiswaan.',
    skills: ['JavaScript', 'React', 'Node.js', 'UI/UX Design', 'Figma', 'Tailwind CSS', 'Git', 'MongoDB'],
    languages: ['Indonesia (Native)', 'English (Professional)'],
    achievements: [
      'Juara 1 Hackathon Nasional 2023',
      'Best Project Award - Web Development Competition',
      'Dean\'s List 2022/2023'
    ]
  });

  const [editData, setEditData] = useState(profileData);

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
    } else if (menuId === 'profil') {
      navigate('/student-profile');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    // Simpan ke localStorage
    localStorage.setItem('studentProfile', JSON.stringify(editData));
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
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
            <p className="text-sm text-gray-600 mt-1">Kelola informasi profil Anda</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                BS
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{profileData.name}</p>
                <p className="text-xs text-gray-600">Mahasiswa</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Profile Header Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative flex items-center space-x-6">
              <div className="relative">
                <img 
                  src="https://ui-avatars.com/api/?name=Budi+Santoso&background=fff&color=3b82f6&size=120"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Camera size={20} className="text-blue-600" />
                  </button>
                )}
              </div>
              
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
                <p className="text-blue-100 mb-3">{profileData.major} • Semester {profileData.semester}</p>
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
                    <Award size={16} />
                    <span>GPA {profileData.gpa}</span>
                  </div>
                </div>
              </div>
              
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Edit Profil
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button 
                    onClick={handleSave}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Simpan
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
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
              {/* Tentang Saya */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tentang Saya</h3>
                {!isEditing ? (
                  <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                ) : (
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                )}
              </div>

              {/* Informasi Akademik */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <BookOpen size={24} className="text-blue-600" />
                  <span>Informasi Akademik</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Universitas</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.university}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.university}
                        onChange={(e) => setEditData({...editData, university: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Program Studi</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.major}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.major}
                        onChange={(e) => setEditData({...editData, major: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 font-medium">Semester</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">Semester {profileData.semester}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.semester}
                        onChange={(e) => setEditData({...editData, semester: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 font-medium">IPK</label>
                    {!isEditing ? (
                      <p className="text-gray-800 mt-1">{profileData.gpa}</p>
                    ) : (
                      <input
                        type="text"
                        value={editData.gpa}
                        onChange={(e) => setEditData({...editData, gpa: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      + Tambah Skill
                    </button>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Award size={24} className="text-yellow-500" />
                  <span>Prestasi</span>
                </h3>
                <ul className="space-y-3">
                  {profileData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact & Additional Info */}
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
                        <p className="text-gray-800 break-words">{profileData.email}</p>
                      ) : (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({...editData, email: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bahasa */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bahasa</h3>
                <ul className="space-y-2">
                  {profileData.languages.map((language, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{language}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistik */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Statistik</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Proyek Selesai</span>
                    <span className="text-2xl font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Rating Rata-rata</span>
                    <span className="text-2xl font-bold">4.8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Penghasilan</span>
                    <span className="text-2xl font-bold">Rp 15jt</span>
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
