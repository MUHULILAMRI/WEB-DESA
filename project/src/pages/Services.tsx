import React, { useState } from 'react';
import { Calendar, Newspaper, Mountain, ScrollText, Users, FileText } from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'agenda',
      icon: Calendar,
      title: 'Agenda Desa',
      description: 'Informasi kegiatan dan acara penting di desa',
      details: {
        title: 'Agenda & Kegiatan Desa',
        content: `Layanan ini menyediakan informasi lengkap tentang seluruh kegiatan dan agenda yang akan dilaksanakan di Desa Sejahtera. Masyarakat dapat dengan mudah mengetahui:
        
        • Jadwal rapat dan musyawarah desa
        • Kegiatan pembangunan infrastruktur
        • Program pemberdayaan masyarakat
        • Festival dan perayaan budaya
        • Pelatihan dan workshop untuk warga
        
        Semua informasi diperbarui secara berkala untuk memastikan partisipasi aktif masyarakat dalam setiap kegiatan desa.`
      }
    },
    {
      id: 'berita',
      icon: Newspaper,
      title: 'Berita Terkini',
      description: 'Kabar terbaru seputar perkembangan desa',
      details: {
        title: 'Informasi & Berita Desa',
        content: `Portal berita desa menyajikan informasi terkini tentang:
        
        • Perkembangan program pembangunan
        • Capaian dan prestasi desa
        • Kegiatan sosial kemasyarakatan
        • Pengumuman penting dari pemerintah desa
        • Liputan kegiatan warga
        
        Berita diperbarui setiap hari untuk memberikan informasi yang akurat dan terpercaya kepada masyarakat.`
      }
    },
    {
      id: 'wisata',
      icon: Mountain,
      title: 'Potensi Wisata',
      description: 'Eksplorasi keindahan alam dan budaya desa',
      details: {
        title: 'Destinasi Wisata Desa',
        content: `Desa Sejahtera memiliki berbagai potensi wisata yang menarik:
        
        • Wisata alam: air terjun, hutan, dan pemandangan alam
        • Wisata budaya: rumah adat dan kesenian tradisional
        • Wisata kuliner: makanan khas desa
        • Agrowisata: perkebunan dan pertanian organik
        • Homestay: penginapan di rumah penduduk
        
        Semua destinasi wisata dikelola dengan baik untuk menjaga kelestarian alam dan budaya lokal.`
      }
    },
    {
      id: 'administrasi',
      icon: ScrollText,
      title: 'Administrasi Online',
      description: 'Layanan surat menyurat dan administrasi desa',
      details: {
        title: 'Layanan Administrasi Digital',
        content: `Sistem administrasi online memudahkan warga dalam:
        
        • Pembuatan surat pengantar
        • Pengajuan KTP dan KK
        • Surat keterangan domisili
        • Surat izin usaha
        • Laporan keluhan masyarakat
        
        Proses pengajuan dapat dilakukan secara online dengan waktu pemrosesan yang lebih cepat dan efisien.`
      }
    },
    {
      id: 'penduduk',
      icon: Users,
      title: 'Data Penduduk',
      description: 'Informasi kependudukan dan demografis',
      details: {
        title: 'Sistem Informasi Penduduk',
        content: `Database kependudukan desa mencakup:
        
        • Statistik demografis
        • Data keluarga
        • Tingkat pendidikan
        • Mata pencaharian
        • Program bantuan sosial
        
        Data diperbarui secara berkala dan dijaga kerahasiaannya sesuai dengan peraturan yang berlaku.`
      }
    },
    {
      id: 'transparansi',
      icon: FileText,
      title: 'Transparansi',
      description: 'Informasi anggaran dan program desa',
      details: {
        title: 'Transparansi Keuangan & Program',
        content: `Keterbukaan informasi publik meliputi:
        
        • Laporan keuangan desa
        • Rencana pembangunan
        • Realisasi anggaran
        • Pengadaan barang dan jasa
        • Laporan pertanggungjawaban
        
        Informasi ini dapat diakses oleh masyarakat sebagai bentuk transparansi pengelolaan desa.`
      }
    }
  ];

  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Layanan Desa Digital</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className={`bg-gray-800 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === service.id ? 'ring-2 ring-green-400' : 'hover:bg-gray-750'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <Icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>

        {activeService && (
          <div className="mt-12 bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {services.find(s => s.id === activeService)?.details.title}
            </h2>
            <div className="text-gray-300 whitespace-pre-line">
              {services.find(s => s.id === activeService)?.details.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;