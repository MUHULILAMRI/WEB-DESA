import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#2dd4bf', transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.nav 
      className="bg-gray-800/80 backdrop-blur-sm shadow-md fixed w-full z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
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
          
          <div className="hidden md:flex items-center gap-8">
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/" className="text-gray-300">Beranda</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/profil" className="text-gray-300">Profil</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/berita" className="text-gray-300">Berita</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/layanan" className="text-gray-300">Layanan</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/galeri" className="text-gray-300">Galeri</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/kontak" className="text-gray-300">Kontak</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/surat" className="text-gray-300 bg-teal-500 px-4 py-2 rounded-md">Buat Surat</Link>
            </motion.div>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col gap-4 items-center">
              <Link to="/" className="text-gray-300 hover:text-teal-400 py-2">Beranda</Link>
              <Link to="/profil" className="text-gray-300 hover:text-teal-400 py-2">Profil</Link>
              <Link to="/berita" className="text-gray-300 hover:text-teal-400 py-2">Berita</Link>
              <Link to="/layanan" className="text-gray-300 hover:text-teal-400 py-2">Layanan</Link>
              <Link to="/galeri" className="text-gray-300 hover:text-teal-400 py-2">Galeri</Link>
              <Link to="/kontak" className="text-gray-300 hover:text-teal-400 py-2">Kontak</Link>
              <Link to="/surat" className="text-gray-300 hover:text-teal-400 py-2">Buat Surat</Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;