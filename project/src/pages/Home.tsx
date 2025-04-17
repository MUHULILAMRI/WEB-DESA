import React from 'react';
import { ChevronRight, Users, Building2, TreeDeciduous, Award } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Desa Sejahtera</h1>
              <p className="text-xl mb-8">Menuju desa modern dengan tetap menjaga kearifan lokal dan kelestarian alam</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                Jelajahi Desa <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">
              <Users className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">5,240</h3>
                <p className="text-gray-300">Penduduk</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">
              <Building2 className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">12</h3>
                <p className="text-gray-300">UMKM Aktif</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">
              <TreeDeciduous className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">85%</h3>
                <p className="text-gray-300">Ruang Hijau</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">
              <Award className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">15+</h3>
                <p className="text-gray-300">Penghargaan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Keunggulan Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000" 
                alt="Pertanian" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Pertanian Organik</h3>
              <p className="text-gray-400">Mengembangkan pertanian organik untuk menjaga kelestarian lingkungan</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1000" 
                alt="Wisata" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Destinasi Wisata</h3>
              <p className="text-gray-400">Menawarkan pengalaman wisata alam dan budaya yang unik</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Desa Digital</h3>
              <p className="text-gray-400">Mengintegrasikan teknologi untuk pelayanan masyarakat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;