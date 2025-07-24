import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Desa Sejahtera</h3>
            <p className="text-gray-400 max-w-md">
              Sebuah desa yang berkomitmen untuk memadukan kemajuan teknologi dengan kearifan lokal demi kesejahteraan bersama dan kelestarian alam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/profil" className="text-gray-400 hover:text-teal-400">Profil</Link></li>
              <li><Link to="/berita" className="text-gray-400 hover:text-teal-400">Berita</Link></li>
              <li><Link to="/layanan" className="text-gray-400 hover:text-teal-400">Layanan</Link></li>
              <li><Link to="/kontak" className="text-gray-400 hover:text-teal-400">Kontak</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><Youtube /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-500">
          <p>MUH. ULIL AMRI | © 2025.</p>
          <p>Dari Masyarakat untuk Masyarakat</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;