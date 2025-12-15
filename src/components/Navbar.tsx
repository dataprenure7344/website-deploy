import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/blog")}>Blog</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/support")}>Support</button>
    </nav>
  );
};

export default Navbar;
