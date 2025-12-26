import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Logo + Brand */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Logo className="w-8 h-8" />
        <span className="text-xl font-bold relative -top-[4px]">
          DataPrenure
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/")}
          className="hover:text-blue-600"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/blog")}
          className="hover:text-blue-600"
        >
          Blog
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="hover:text-blue-600"
        >
          Contact
        </button>
        <button
          onClick={() => navigate("/support")}
          className="hover:text-blue-600"
        >
          Support
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
