import { Users, Award, Zap, BookOpen, Target, TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: BookOpen,
      title: 'Excellence in Education',
      description: 'We provide world-class content developed by industry professionals with years of experience.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a supportive community where students learn together and succeed together.',
    },
    {
      icon: Target,
      title: 'Practical Skills',
      description: 'Our curriculum focuses on real-world applications and hands-on projects that matter in the industry.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'We are committed to helping our students achieve their career goals and land their dream jobs.',
    },
  ];

  const milestones = [
    { year: '2020', achievement: 'Founded DataPrenure with a vision to democratize data science education' },
    { year: '2021', achievement: 'Reached 10,000+ students and expanded to 15+ countries' },
    { year: '2022', achievement: 'Achieved 90% job placement rate and 50,000+ active students' },
    { year: '2024', achievement: 'Became the leading data science platform with 100+ courses' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Zap className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <BookOpen className="w-24 h-24" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About DataPrenure</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Empowering individuals with industry-ready data science and AI skills since 2020
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                DataPrenure exists to make quality data science and AI education accessible to everyone, regardless of their background or location. We believe that the future belongs to those who can work with data, and we're committed to equipping the next generation with the skills they need to succeed.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our platform combines cutting-edge curriculum with mentorship from industry experts, creating a learning experience that prepares students for real-world challenges.
              </p>
              <button
                onClick={() => navigate('/careers')}
                className="group bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Join Our Team</span>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mission"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at DataPrenure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-[#03a9dc]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader in just a few years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#f4f4f4] to-white rounded-2xl p-8 border-l-4 border-[#03a9dc] hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold text-[#03a9dc] mb-4">{milestone.year}</div>
                <p className="text-gray-600 leading-relaxed">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50K+</p>
              <p className="text-lg opacity-90">Students Worldwide</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100+</p>
              <p className="text-lg opacity-90">Expert Instructors</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
              <p className="text-lg opacity-90">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-lg opacity-90">Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals leading the data science revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Founder & CEO',
                bio: '15+ years in data science and machine learning, Ph.D. in Computer Science',
                initials: 'RK',
              },
              {
                name: 'Emily Watson',
                role: 'Chief Curriculum Officer',
                bio: '12+ years in education technology, ex-Google and Microsoft',
                initials: 'EW',
              },
              {
                name: 'Michael Chang',
                role: 'VP of Student Success',
                bio: '10+ years in career development, mentored 5000+ professionals',
                initials: 'MC',
              },
            ].map((leader, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {leader.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{leader.name}</h3>
                <p className="text-[#028eb8] font-semibold text-center mb-4">{leader.role}</p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
