import React from 'react';
import { GanttChart, FileText } from 'lucide-react';

function Profile() {
  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Profil Desa</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?auto=format&fit=crop&q=80&w=1000" 
              alt="Desa Sejahtera" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Sejarah & Visi Misi</h2>
            <p className="text-gray-300 mb-6">
              Desa Sejahtera adalah desa yang kaya akan potensi alam dan budaya. Terletak di antara gunung dan pantai,
              desa ini memiliki pemandangan yang memukau dan telah berkembang menjadi contoh pembangunan berkelanjutan
              yang menggabungkan modernisasi dengan kearifan lokal.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GanttChart className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Visi</h4>
                  <p className="text-gray-300">Mewujudkan Desa Sejahtera yang modern, mandiri, dan berkelanjutan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Misi</h4>
                  <p className="text-gray-300">Mengembangkan potensi desa melalui pemberdayaan masyarakat dan pelestarian lingkungan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Struktur Organisasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                alt="Kepala Desa"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">Budi Santoso</h3>
              <p className="text-gray-400">Kepala Desa</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
                alt="Sekretaris Desa"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">Siti Aminah</h3>
              <p className="text-gray-400">Sekretaris Desa</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
                alt="Bendahara Desa"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">Ahmad Yani</h3>
              <p className="text-gray-400">Bendahara Desa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;