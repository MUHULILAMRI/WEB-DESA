import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Newspaper, Mountain, ScrollText, Users, FileText } from 'lucide-react';

const services = [
  {
    id: 'administrasi',
    icon: ScrollText,
    title: 'Administrasi Online',
    description: 'Layanan surat menyurat dan administrasi desa secara digital.',
    link: '/layanan/administrasi',
    color: 'text-teal-400'
  },
  {
    id: 'agenda',
    icon: Calendar,
    title: 'Agenda Desa',
    description: 'Informasi kegiatan dan acara penting di desa.',
    link: '/layanan/agenda',
    color: 'text-sky-400'
  },
  {
    id: 'berita',
    icon: Newspaper,
    title: 'Berita Terkini',
    description: 'Kabar terbaru seputar perkembangan desa.',
    link: '/berita', // Mengarah ke halaman berita utama
    color: 'text-amber-400'
  },
  {
    id: 'wisata',
    icon: Mountain,
    title: 'Potensi Wisata',
    description: 'Eksplorasi keindahan alam dan budaya desa.',
    link: '/potensi', // Mengarah ke halaman potensi utama
    color: 'text-lime-400'
  },
  {
    id: 'penduduk',
    icon: Users,
    title: 'Data Penduduk',
    description: 'Informasi kependudukan dan demografis.',
    link: '/layanan/penduduk',
    color: 'text-indigo-400'
  },
  {
    id: 'transparansi',
    icon: FileText,
    title: 'Transparansi Anggaran',
    description: 'Informasi anggaran dan program desa.',
    link: '/layanan/transparansi',
    color: 'text-rose-400'
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Layanan Desa Digital
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link} className="block bg-gray-800 p-8 rounded-xl shadow-lg h-full transform hover:-translate-y-2 transition-transform duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-6">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <span className="font-semibold text-teal-400 flex items-center gap-2">
                  Lihat Detail
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;