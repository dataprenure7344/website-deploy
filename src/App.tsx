import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { Logo } from './components/Logo';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Career } from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Support from './pages/Support';

import { Menu, X } from 'lucide-react';

/* ---------------- Navigation ---------------- */

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItem = (label: string, path: string) => (
    <span
      onClick={() => navigate(path)}
      className={`cursor-pointer font-medium transition-colors ${
        isActive(path)
          ? 'text-[#028eb8]'
          : 'text-gray-700 hover:text-[#028eb8]'
      }`}
    >
      {label}
    </span>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold">
            Data<span className="font-bold">Prenure</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItem('Home', '/')}
          {navItem('About', '/about')}
          {navItem('Careers', '/careers')}
          {navItem('Blog', '/blog')}
          {navItem('Contact', '/contact')}
          {navItem('Support', '/support')}

          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Careers', '/careers'],
            ['Blog', '/blog'],
            ['Contact', '/contact'],
            ['Support', '/support'],
          ].map(([label, path]) => (
            <div
              key={path}
              onClick={() => {
                navigate(path);
                setIsMenuOpen(false);
              }}
              className="cursor-pointer py-2 text-gray-700 hover:text-[#028eb8]"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const navigate = useNavigate();

  const link = (label: string, path: string) => (
    <span
      onClick={() => navigate(path)}
      className="cursor-pointer hover:text-white transition"
    >
      {label}
    </span>
  );

  return (
    <footer className="bg-[#333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold">DataPrenure</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering learners with industry-ready data skills.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            {link('About Us', '/about')}
            {link('Careers', '/careers')}
            {link('Blog', '/blog')}
            {link('Contact', '/contact')}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            {link('Help Center', '/support')}
            {link('Privacy Policy', '/support')}
            {link('Terms of Service', '/support')}
            {link('FAQs', '/support')}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">Get Started</h4>
          <button
            onClick={() => navigate('/')}
            className="mt-2 bg-[#028eb8] px-5 py-2 rounded-lg font-bold"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        © 2024 DataPrenure. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- Routes ---------------- */

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- App Root ---------------- */

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
