import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, Clock, MapPin, Briefcase, User, Star, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  budget: string;
  deadline: string;
  location: string;
  description: string;
  requirements: string[];
  skills: string[];
  clientName: string;
  clientCompany: string;
  clientRating: number;
  clientProjects: number;
  postedDate: string;
  applicants: number;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [application, setApplication] = useState({
    coverLetter: '',
    estimatedTime: '',
    proposedBudget: '',
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load project from localStorage - check both 'projects' and 'postedProjects'
    const defaultProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const postedProjects = JSON.parse(localStorage.getItem('postedProjects') || '[]');
    const allProjects = [...defaultProjects, ...postedProjects];
    
    const foundProject = allProjects.find((p: Project) => p.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Save application to localStorage
      const applications = JSON.parse(localStorage.getItem('applications') || '[]');
      applications.push({
        id: Date.now(),
        projectId: project?.id,
        projectTitle: project?.title,
        studentName: 'Current Student', // Would come from auth context
        ...application,
        status: 'pending',
        appliedDate: new Date().toISOString()
      });
      localStorage.setItem('applications', JSON.stringify(applications));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/browse-projects');
      }, 2000);
    }, 1500);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proyek Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-6">Proyek yang Anda cari tidak tersedia.</p>
          <button
            onClick={() => navigate('/browse-projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kembali ke Cari Proyek
          </button>
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lamaran Terkirim!</h2>
          <p className="text-gray-600 mb-2">Lamaran Anda telah berhasil dikirim.</p>
          <p className="text-sm text-gray-500">Klien akan meninjau aplikasi Anda segera.</p>
          <p className="text-sm text-gray-400 mt-4">Mengalihkan ke halaman proyek...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/browse-projects')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Cari Proyek
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">Diposting {project.postedDate}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      <div>
                        <div className="text-xs text-gray-500">Budget</div>
                        <div className="font-bold">{project.budget}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                      <div>
                        <div className="text-xs text-gray-500">Deadline</div>
                        <div className="font-bold">{project.deadline}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                      <div>
                        <div className="text-xs text-gray-500">Lokasi</div>
                        <div className="font-bold">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="text-xs text-gray-500">Pelamar</div>
                        <div className="font-bold">{project.applicants} mahasiswa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Deskripsi Proyek</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Required */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills yang Dibutuhkan</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Form */}
            {showApplicationForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Kirim Lamaran</h2>
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      required
                      value={application.coverLetter}
                      onChange={(e) => setApplication({ ...application, coverLetter: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jelaskan mengapa Anda cocok untuk proyek ini..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimasi Waktu Pengerjaan *
                      </label>
                      <input
                        type="text"
                        required
                        value={application.estimatedTime}
                        onChange={(e) => setApplication({ ...application, estimatedTime: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="contoh: 2 minggu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Proposed Budget (opsional)
                      </label>
                      <input
                        type="text"
                        value={application.proposedBudget}
                        onChange={(e) => setApplication({ ...application, proposedBudget: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Rp 2.000.000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Link Portfolio (opsional)
                    </label>
                    <input
                      type="url"
                      value={application.portfolio}
                      onChange={(e) => setApplication({ ...application, portfolio: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://portfolio.com"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                      disabled={isSubmitting}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center disabled:bg-blue-400"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Kirim Lamaran
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            {!showApplicationForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-bold text-lg flex items-center justify-center shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Lamar Sekarang
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  {project.applicants} mahasiswa sudah melamar
                </p>
              </div>
            )}

            {/* Client Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Tentang Klien</h3>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {project.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{project.clientName}</h4>
                  <p className="text-sm text-gray-600">{project.clientCompany}</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-bold text-gray-900">{project.clientRating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Proyek Selesai</span>
                  <span className="font-bold text-gray-900">{project.clientProjects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Sejak</span>
                  <span className="font-bold text-gray-900">2024</span>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Statistik Proyek</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">Total Pelamar</span>
                  </div>
                  <span className="font-bold text-gray-900">{project.applicants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Waktu Tersisa</span>
                  </div>
                  <span className="font-bold text-orange-600">{project.deadline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm">Status</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Terbuka
                  </span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">💡 Tips Melamar</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Baca deskripsi proyek dengan teliti</li>
                <li>• Tulis cover letter yang personal</li>
                <li>• Tunjukkan portfolio relevan</li>
                <li>• Berikan estimasi waktu realistis</li>
                <li>• Respons cepat jika diterima</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
