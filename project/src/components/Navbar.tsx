import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#2dd4bf', transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -10 },
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

            <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
              <motion.button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center gap-1 text-gray-300"
                variants={linkVariants} 
                whileHover="hover"
              >
                Profil Desa <ChevronDown className="w-4 h-4" />
              </motion.button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute top-full mt-2 w-48 bg-gray-700 rounded-md shadow-lg"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link to="/profil" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Profil Umum</Link>
                    <Link to="/aparatur" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Aparatur Desa</Link>
                    <Link to="/potensi" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Potensi Desa</Link>
                    <Link to="/lokasi" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Lokasi Peta</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              <Link to="/surat" className="text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600">Buat Surat</Link>
            </motion.div>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4 items-center">
                <Link to="/" className="text-gray-300 hover:text-teal-400 py-2">Beranda</Link>
                <Link to="/profil" className="text-gray-300 hover:text-teal-400 py-2">Profil</Link>
                <Link to="/aparatur" className="text-gray-300 hover:text-teal-400 py-2">Aparatur Desa</Link>
                <Link to="/potensi" className="text-gray-300 hover:text-teal-400 py-2">Potensi Desa</Link>
                <Link to="/lokasi" className="text-gray-300 hover:text-teal-400 py-2">Lokasi Peta</Link>
                <Link to="/berita" className="text-gray-300 hover:text-teal-400 py-2">Berita</Link>
                <Link to="/layanan" className="text-gray-300 hover:text-teal-400 py-2">Layanan</Link>
                <Link to="/galeri" className="text-gray-300 hover:text-teal-400 py-2">Galeri</Link>
                <Link to="/kontak" className="text-gray-300 hover:text-teal-400 py-2">Kontak</Link>
                <Link to="/surat" className="text-gray-300 hover:text-teal-400 py-2">Buat Surat</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
