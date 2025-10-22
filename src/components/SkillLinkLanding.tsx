import { useState } from 'react';
import { Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SkillLinkLanding() {
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">SkillLink</h1>
            <div className="flex items-center space-x-6">
              <a href="#tentang" className="text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#cara-kerja" className="text-gray-700 hover:text-blue-600">Cara Kerja</a>
              <a href="#proyek" className="text-gray-700 hover:text-blue-600">Proyek</a>
              <button onClick={() => navigate('/login')} className="text-blue-600 hover:text-blue-700 font-medium">Masuk</button>
              <button onClick={() => navigate('/register')} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Platform Freelance Khusus Mahasiswa
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Wujudkan Potensimu,
                <span className="text-blue-600"> Raih Proyek Nyata</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Platform yang menghubungkan mahasiswa berbakat dengan klien yang membutuhkan jasa berkualitas.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate('/register')} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                  Mulai Sebagai Mahasiswa
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button onClick={() => navigate('/register')} className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                  Posting Proyek
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">Desain UI/UX Mobile App</div>
                        <div className="text-sm text-gray-500">3 mahasiswa diperlukan</div>
                      </div>
                      <div className="text-blue-600 font-bold">Rp 2.5jt</div>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">Website E-Commerce</div>
                        <div className="text-sm text-gray-500">React & Node.js</div>
                      </div>
                      <div className="text-green-600 font-bold">Rp 5jt</div>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">Content Writing Blog</div>
                        <div className="text-sm text-gray-500">SEO & Copywriting</div>
                      </div>
                      <div className="text-purple-600 font-bold">Rp 1jt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-8 bg-white border-y">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Mahasiswa Terdaftar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Masalah yang Kami Selesaikan</h2>
            <p className="text-lg text-gray-600">
              Menjembatani kesenjangan antara mahasiswa berbakat dan kebutuhan pasar
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Masalah Mahasiswa</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">62% Kesulitan Dapat Kerja</div>
                    <p className="text-gray-600 text-sm">Mismatch antara keahlian dan industri</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sulit Akses Proyek Nyata</div>
                    <p className="text-gray-600 text-sm">Tidak ada wadah bangun portofolio</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Platform Terlalu Kompetitif</div>
                    <p className="text-gray-600 text-sm">Freelancer pro mendominasi pasar</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Masalah Klien</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">55% UMKM Kesulitan Cari Jasa</div>
                    <p className="text-gray-600 text-sm">Sulit menemukan penyedia yang tepat</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Biaya Tidak Terjangkau</div>
                    <p className="text-gray-600 text-sm">Freelancer pro terlalu mahal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kualitas Tidak Konsisten</div>
                    <p className="text-gray-600 text-sm">Sulit dapat talenta berkualitas</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-8 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Solusi Cerdas dengan AI</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Teknologi AI mencocokkan mahasiswa dengan proyek yang sesuai keahlian mereka
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <CheckCircle className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">AI Matching</h3>
              <p className="text-blue-100">Pencocokan otomatis skill dengan proyek</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Star className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Portfolio Builder</h3>
              <p className="text-blue-100">Bangun portofolio digital profesional</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Tim Kolaborasi</h3>
              <p className="text-blue-100">Kerja sama dalam tim virtual</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cara Kerja SkillLink</h2>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('student')}
                className={`px-8 py-3 rounded-lg font-medium ${
                  activeTab === 'student' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                Untuk Mahasiswa
              </button>
              <button
                onClick={() => setActiveTab('client')}
                className={`px-8 py-3 rounded-lg font-medium ${
                  activeTab === 'client' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                Untuk Klien
              </button>
            </div>
          </div>

          {activeTab === 'student' && (
            <div className="grid grid-cols-4 gap-6">
              {[
                { num: 1, title: 'Daftar & Buat Profile', desc: 'Isi data diri, skills, dan portfolio' },
                { num: 2, title: 'Temukan Proyek', desc: 'AI rekomendasikan proyek yang sesuai' },
                { num: 3, title: 'Kerjakan Proyek', desc: 'Kolaborasi dengan tim dan klien' },
                { num: 4, title: 'Terima Pembayaran', desc: 'Dapatkan bayaran dan review' }
              ].map((step) => (
                <div key={step.num} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'client' && (
            <div className="grid grid-cols-4 gap-6">
              {[
                { num: 1, title: 'Posting Proyek', desc: 'Jelaskan kebutuhan dan budget' },
                { num: 2, title: 'Review Aplikasi', desc: 'AI rekomendasikan mahasiswa terbaik' },
                { num: 3, title: 'Monitor Progress', desc: 'Pantau perkembangan proyek' },
                { num: 4, title: 'Terima Hasil', desc: 'Review dan beri rating' }
              ].map((step) => (
                <div key={step.num} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="proyek" className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyek Populer</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Desain Logo & Brand', category: 'Design', budget: 'Rp 1.5jt', deadline: '2 minggu' },
              { title: 'Aplikasi Mobile E-Commerce', category: 'Development', budget: 'Rp 8jt', deadline: '2 bulan' },
              { title: 'Content Writing Blog', category: 'Writing', budget: 'Rp 500rb', deadline: '1 minggu' }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <div className="border-t pt-4 flex justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Budget</div>
                    <div className="font-bold text-gray-900">{project.budget}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Deadline</div>
                    <div className="font-bold text-gray-900">{project.deadline}</div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ribuan mahasiswa yang sudah membangun karir mereka
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/register')} className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium">
              Daftar Sebagai Mahasiswa
            </button>
            <button onClick={() => navigate('/register')} className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 font-medium">
              Posting Proyek
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">SkillLink</div>
          <p className="mb-4">Platform freelance yang menghubungkan mahasiswa dengan peluang nyata</p>
          <div className="text-sm text-gray-500">© 2025 SkillLink. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
