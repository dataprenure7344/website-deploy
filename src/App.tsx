import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './components/Logo';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Career } from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Support from './pages/Support';
import { Menu, X, ChevronRight } from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-bold text-gray-900">
              Data<span className="font-bold">Prenure</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => navigate('/')}
              className={`cursor-pointer font-medium transition-colors ${
                isActive('/') ? 'text-[#028eb8]' : 'text-gray-700 hover:text-[#028eb8]'
              }`}
            >
              Home
            </a>
            <a
              onClick={() => navigate('/about')}
              className={`cursor-pointer font-medium transition-colors ${
                isActive('/about') ? 'text-[#028eb8]' : 'text-gray-700 hover:text-[#028eb8]'
              }`}
            >
              About
            </a>
            <a
              onClick={() => navigate('/blog')}
              className={`cursor-pointer font-medium transition-colors ${
                isActive('/blog') ? 'text-[#028eb8]' : 'text-gray-700 hover:text-[#028eb8]'
              }`}
            >
              Blog
            </a>
            <a
              onClick={() => navigate('/contact')}
              className={`cursor-pointer font-medium transition-colors ${
                isActive('/contact') ? 'text-[#028eb8]' : 'text-gray-700 hover:text-[#028eb8]'
              }`}
            >
              Contact
            </a>
            <a
              onClick={() => navigate('/support')}
              className={`cursor-pointer font-medium transition-colors ${
                isActive('/support') ? 'text-[#028eb8]' : 'text-gray-700 hover:text-[#028eb8]'
              }`}
            >
              Support
            </a>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Enroll Now
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="block cursor-pointer text-gray-700 hover:text-[#028eb8] transition-colors font-medium py-2"
            >
              Home
            </a>
            <a
              onClick={() => {
                navigate('/about');
                setIsMenuOpen(false);
              }}
              className="block cursor-pointer text-gray-700 hover:text-[#028eb8] transition-colors font-medium py-2"
            >
              About
            </a>
            <a
              onClick={() => {
                navigate('/blog');
                setIsMenuOpen(false);
              }}
              className="block cursor-pointer text-gray-700 hover:text-[#028eb8] transition-colors font-medium py-2"
            >
              Blog
            </a>
            <a
              onClick={() => {
                navigate('/contact');
                setIsMenuOpen(false);
              }}
              className="block cursor-pointer text-gray-700 hover:text-[#028eb8] transition-colors font-medium py-2"
            >
              Contact
            </a>
            <a
              onClick={() => {
                navigate('/support');
                setIsMenuOpen(false);
              }}
              className="block cursor-pointer text-gray-700 hover:text-[#028eb8] transition-colors font-medium py-2"
            >
              Support
            </a>
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white px-6 py-2 rounded-lg font-bold"
            >
              Enroll Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold">DataPrenure</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering learners worldwide with industry-ready data science skills.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  onClick={() => navigate('/')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Data Analytics with AI
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Business Analytics with AI
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Data Science with AIML
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  onClick={() => navigate('/about')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/careers')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/blog')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/contact')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  onClick={() => navigate('/support')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/support')}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            2024 DataPrenure. All rights reserved. Designed to empower your data science journey.
          </p>
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
