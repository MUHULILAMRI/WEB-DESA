import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://i.pinimg.com/originals/ea/25/1c/ea251ce024516a96b35d3bd7f781c908.png" 
              alt="Logo Sulsel" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">SULAWESI SELATAN</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-green-400">Beranda</Link>
            <Link to="/profil" className="text-gray-300 hover:text-green-400">Profil</Link>
            <Link to="/berita" className="text-gray-300 hover:text-green-400">Berita</Link>
            <Link to="/layanan" className="text-gray-300 hover:text-green-400">Layanan</Link>
            <Link to="/galeri" className="text-gray-300 hover:text-green-400">Galeri</Link>
            <Link to="/kontak" className="text-gray-300 hover:text-green-400">Kontak</Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-300 hover:text-green-400">Beranda</Link>
              <Link to="/profil" className="text-gray-300 hover:text-green-400">Profil</Link>
              <Link to="/berita" className="text-gray-300 hover:text-green-400">Berita</Link>
              <Link to="/layanan" className="text-gray-300 hover:text-green-400">Layanan</Link>
              <Link to="/galeri" className="text-gray-300 hover:text-green-400">Galeri</Link>
              <Link to="/kontak" className="text-gray-300 hover:text-green-400">Kontak</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;