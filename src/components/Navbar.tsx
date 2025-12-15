import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex gap-6 justify-center">
      <Link to="/blog" className="hover:text-blue-400">Blog</Link>
      <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      <Link to="/support" className="hover:text-blue-400">Support</Link>
    </nav>
  );
};

export default Navbar;
