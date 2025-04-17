import React from 'react';

function News() {
  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Berita Terkini</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
              alt="Berita 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">12 Maret 2024</p>
              <h3 className="text-xl font-semibold text-white mb-2">Pembangunan Pusat Digital Desa</h3>
              <p className="text-gray-300">Desa Sejahtera memulai pembangunan pusat digital untuk meningkatkan literasi teknologi masyarakat...</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000" 
              alt="Berita 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">10 Maret 2024</p>
              <h3 className="text-xl font-semibold text-white mb-2">Festival Panen Raya</h3>
              <p className="text-gray-300">Masyarakat desa merayakan hasil panen melimpah dengan festival budaya tahunan...</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1000" 
              alt="Berita 3" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">8 Maret 2024</p>
              <h3 className="text-xl font-semibold text-white mb-2">Program Desa Wisata</h3>
              <p className="text-gray-300">Pengembangan destinasi wisata alam dan budaya untuk mendukung ekonomi lokal...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;