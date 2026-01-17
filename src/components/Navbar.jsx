import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          </Link>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/board"
              className="text-sm bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md transition focus:outline-none focus:ring-2 focus:ring-stone-200 px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/board"
              className="text-sm bg-stone-950 hover:bg-stone-900 text-stone-50 rounded-md transition focus:outline-none focus:ring-2 focus:ring-stone-200 px-4 py-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
