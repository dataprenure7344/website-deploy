import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import Logo from './components/Logo';

import Landing from './pages/Landing';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Support from './pages/Support';

import { Menu, X } from 'lucide-react';

/* ---------------- NAV ---------------- */

function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const link = (label: string, path: string) => (
    <span
      onClick={() => {
        navigate(path);
        setOpen(false);
      }}
      className={`cursor-pointer ${
        location.pathname === path
          ? 'text-[#028eb8]'
          : 'text-gray-700 hover:text-[#028eb8]'
      }`}
    >
      {label}
    </span>
  );

  return (
    <header className="bg-white border-b shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Logo className="w-9 h-9" />
          <span className="text-xl font-bold">DataPrenure</span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {link('Home', '/')}
          {link('About', '/about')}
          {link('Careers', '/careers')}
          {link('Blog', '/blog')}
          {link('Contact', '/contact')}
          {link('Support', '/support')}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 py-3 space-y-2">
          {link('Home', '/')}
          {link('About', '/about')}
          {link('Careers', '/careers')}
          {link('Blog', '/blog')}
          {link('Contact', '/contact')}
          {link('Support', '/support')}
        </div>
      )}
    </header>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#333] text-white py-8 text-center">
      <p className="text-gray-400 text-sm">
        © 2024 DataPrenure. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-3 text-sm">
        <span onClick={() => navigate('/blog')} className="cursor-pointer">
          Blog
        </span>
        <span onClick={() => navigate('/contact')} className="cursor-pointer">
          Contact
        </span>
        <span onClick={() => navigate('/support')} className="cursor-pointer">
          Support
        </span>
      </div>
    </footer>
  );
}

/* ---------------- ROUTES ---------------- */

function AppContent() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
