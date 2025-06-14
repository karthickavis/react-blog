import { Link } from 'react-router-dom';
import { FaBlog ,FaBars,FaTimes} from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-100 text-slate-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2 font-serif text-emerald-700">
          <FaBlog />
          MindWrite
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
         {menuOpen ? <FaTimes/> : <FaBars/>}
        </button>

        {/* Navigation links */}
        <ul
          className={`md:flex gap-6 font-medium font-sans absolute md:static bg-emerald-100 md:bg-transparent top-full left-0 w-full md:w-auto px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link to="/" className="block py-2 md:py-0 hover:text-emerald-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 md:py-0 hover:text-emerald-600">About</Link>
          </li>
          <li>
            <Link to="/blog" className="block py-2 md:py-0 hover:text-emerald-600">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 md:py-0 hover:text-emerald-600">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
