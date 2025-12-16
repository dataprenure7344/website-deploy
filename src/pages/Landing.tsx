import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { CourseInquiryForm } from '../components/CourseInquiryForm';
import { BookOpen, Target, Users, Award, BarChart, ChevronRight, Zap, Briefcase } from 'lucide-react';
import { IndustryTools } from "../components/IndustryTools";

export function Landing() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  const heroImages = [
    'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1000',
  ];

  const courses = [
    {
      title: 'Data Analytics with AI',
      price: '1,06,000 Rs.',
      description: 'Analyze data and create insights with SQL, Excel, Tableau, and AI-powered tools',
      icon: Target,
      highlight: 'Beginner Friendly',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Business Analytics with AI',
      price: '1,09,000 Rs.',
      description: 'Drive business decisions with advanced analytics, AI insights, and strategic planning',
      icon: BarChart,
      highlight: 'Career Support',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Data Science with AIML',
      price: '1,16,000 Rs.',
      description: 'Master data science with AI and Machine Learning, from Python to deep learning models',
      icon: BookOpen,
      highlight: 'Most Popular',
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#03a9dc] to-[#027fa4] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#028eb8] to-[#00a1d0] opacity-5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#03a9dc] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse hover:animate-none transition-all">
                Industry-Ready Skills
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Career with Data Science
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn from industry experts and build the skills that matter. Join 50,000+ students
                who have launched successful careers in data science, AI, and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="group bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Learning Today</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#028eb8] border-2 border-[#028eb8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#028eb8] hover:text-white hover:shadow-lg transition-all duration-300 text-center group"
                >
                  Explore Courses
                </button>
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                {heroImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Hero image ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === heroImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === heroImageIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:rotate-0 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#03a9dc]">
                <div className="flex items-center space-x-3 mb-8">
                  <Logo className="w-16 h-16" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">DataPrenure</h3>
                    <p className="text-[#028eb8] font-semibold">Your Path to Success</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: BookOpen, label: '100+ Courses', sublabel: 'Expert-led content' },
                    { icon: Users, label: '50,000+ Students', sublabel: 'Global community' },
                    { icon: Award, label: '95% Success Rate', sublabel: 'Career placement' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.sublabel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50K+</p>
              <p className="text-lg opacity-90">Active Students</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100+</p>
              <p className="text-lg opacity-90">Expert Instructors</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
              <p className="text-lg opacity-90">Job Placement</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">4.8/5</p>
              <p className="text-lg opacity-90">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our industry-leading programs designed to get you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const isVisible = visibleCards.has(index);
              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-[#03a9dc] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="bg-[#03a9dc] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {course.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{course.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-2xl font-bold text-[#028eb8]">{course.price}</span>
                      <button
                        onClick={() => setShowForm(true)}
                        className="group bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all flex items-center space-x-1"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
              ✕
            </button>
            <div className="bg-gradient-to-br from-[#f4f4f4] to-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Logo className="w-12 h-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Learning Journey
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours
                </p>
              </div>
              <CourseInquiryForm />
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our students are now working at top companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Data Scientist at Google',
                quote: 'DataPrenure gave me the skills and confidence to land my dream job. The hands-on projects were invaluable.',
                company: 'Google',
              },
              {
                name: 'Michael Roberts',
                role: 'ML Engineer at Microsoft',
                quote: 'The instructors are industry experts who truly care about student success. Best investment I ever made.',
                company: 'Microsoft',
              },
              {
                name: 'Priya Patel',
                role: 'Analytics Lead at Amazon',
                quote: 'From beginner to professional in 6 months. The career support team helped me every step of the way.',
                company: 'Amazon',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 border-[#03a9dc] hover:border-[#027fa4]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-[#028eb8] font-medium">{testimonial.role}</p>
                  </div>
                  <Briefcase className="w-5 h-5 text-[#03a9dc] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#028eb8]"></div>
                  <span className="text-sm text-gray-500">Works at {testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Zap className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <BookOpen className="w-24 h-24" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join thousands of successful students who have launched their careers in data science.
            Start your journey today with industry-leading courses and expert mentorship.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="group relative bg-white text-[#028eb8] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all overflow-hidden"
          >
            <span className="relative flex items-center justify-center space-x-2">
              <span>Get Started Now</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
