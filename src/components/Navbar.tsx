import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      {/* Logo + Text */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Logo className="w-8 h-8" />
        <span className="text-xl font-bold relative -top-[2px]">
          DataPrenure
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/blog")}>Blog</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/support")}>Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
