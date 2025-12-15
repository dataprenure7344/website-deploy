import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Briefcase, MapPin, DollarSign, ChevronRight, X, BookOpen, Users, Award, Zap } from 'lucide-react';

export function Career() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Data Scientist',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150K - $200K',
      description: 'Lead the development of advanced analytics and ML models for our platform. Work with a team of talented data professionals.',
      requirements: [
        '5+ years of data science experience',
        'Strong Python/R programming skills',
        'Experience with TensorFlow or PyTorch',
        'Master\'s in Computer Science or related field',
      ],
    },
    {
      id: 2,
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $170K',
      description: 'Build scalable ML systems and optimize models for production. Collaborate with our engineering team.',
      requirements: [
        '3+ years of ML engineering experience',
        'Proficiency in Python and cloud platforms',
        'Experience with MLOps and model deployment',
        'Strong software engineering fundamentals',
      ],
    },
    {
      id: 3,
      title: 'Curriculum Developer',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100K - $130K',
      description: 'Create engaging courses and learning materials for data science and AI topics. Shape the future of education.',
      requirements: [
        '5+ years in education or training',
        'Strong knowledge of data science/ML',
        'Excellent communication skills',
        'Experience with instructional design',
      ],
    },
    {
      id: 4,
      title: 'Data Analytics Manager',
      department: 'Analytics',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K - $150K',
      description: 'Lead the analytics team and drive data-driven insights for business decisions.',
      requirements: [
        '7+ years of analytics experience',
        'Team management experience',
        'SQL and Python proficiency',
        'Strong stakeholder communication',
      ],
    },
    {
      id: 5,
      title: 'AI/ML Instructor',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $120K',
      description: 'Teach live classes and mentor students in AI and Machine Learning concepts.',
      requirements: [
        '3+ years of industry experience',
        'Teaching or mentoring experience',
        'Deep knowledge of AI/ML',
        'Excellent presentation skills',
      ],
    },
    {
      id: 6,
      title: 'Career Counselor',
      department: 'Student Services',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70K - $100K',
      description: 'Support students in their career transition and help them land their dream jobs.',
      requirements: [
        '3+ years in career counseling',
        'Knowledge of tech industry roles',
        'Strong interpersonal skills',
        'Passion for student success',
      ],
    },
  ];

  const benefits = [
    { icon: Briefcase, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: Users, title: 'Great Team', description: 'Work with passionate and talented professionals' },
    { icon: Award, title: 'Career Growth', description: 'Continuous learning and development opportunities' },
    { icon: BookOpen, title: 'Course Access', description: 'Free access to all DataPrenure courses' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Zap className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Briefcase className="w-24 h-24" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers at DataPrenure</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join a team on a mission to transform education and empower the next generation of data professionals
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a mission-driven company transforming how people learn data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#f4f4f4] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border-2 border-transparent hover:border-[#03a9dc]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              View our current job openings and apply today
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#03a9dc] cursor-pointer group"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-[#028eb8] font-semibold text-sm mb-3">{job.department}</p>
                    </div>
                    <span className="bg-[#03a9dc] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600 text-sm">
                            <span className="text-[#03a9dc] font-bold mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowForm(true);
                        }}
                        className="group/btn bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all flex items-center space-x-2"
                      >
                        <span>Apply Now</span>
                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
                <p className="mb-6 leading-relaxed text-sm opacity-90">
                  Don't see the perfect role? Send us your resume and tell us what position interests you.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-white text-[#028eb8] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Submit Resume
                </button>

                <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                  <h4 className="font-bold mb-4">Quick Facts</h4>
                  <div className="space-y-3 text-sm">
                    <p>50,000+ students trained</p>
                    <p>100+ expert instructors</p>
                    <p>95% success rate</p>
                    <p>Present in 15+ countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <section className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
          <div className="relative max-w-3xl w-full my-8 transform transition-all duration-300">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:scale-110 transition-all z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="bg-gradient-to-br from-[#f4f4f4] to-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Logo className="w-12 h-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Apply to DataPrenure
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about yourself and why you'd be a great fit for our team
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Position Applied For *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a position</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us why you'd be a great fit for DataPrenure..."
                  ></textarea>
                </div>

                <div className="bg-[#03a9dc] bg-opacity-10 border border-[#03a9dc] rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    By submitting this application, you agree to our privacy policy and consent to be contacted about this position.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
