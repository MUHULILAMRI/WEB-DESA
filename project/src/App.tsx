import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import News from './pages/News';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Surat from './pages/Surat';
import Potensi from './pages/Potensi';
import Aparatur from './pages/Aparatur';
import Lokasi from './pages/Lokasi';
import LayananAdministrasi from './pages/layanan/LayananAdministrasi';
import LayananAgenda from './pages/layanan/LayananAgenda';
import LayananPenduduk from './pages/layanan/LayananPenduduk';
import LayananTransparansi from './pages/layanan/LayananTransparansi';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<News />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/surat" element={<Surat />} />

          {/* Halaman Profil Desa Dropdown */}
          <Route path="/profil" element={<Profile />} />
          <Route path="/aparatur" element={<Aparatur />} />
          <Route path="/potensi" element={<Potensi />} />
          <Route path="/lokasi" element={<Lokasi />} />

          {/* Halaman Layanan */}
          <Route path="/layanan" element={<Services />} />
          <Route path="/layanan/administrasi" element={<LayananAdministrasi />} />
          <Route path="/layanan/agenda" element={<LayananAgenda />} />
          <Route path="/layanan/penduduk" element={<LayananPenduduk />} />
          <Route path="/layanan/transparansi" element={<LayananTransparansi />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;