import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, ShoppingBag } from 'lucide-react';

const potentials = [
  {
    icon: Leaf,
    title: 'Pertanian Padi Organik',
    description: 'Menghasilkan beras organik berkualitas tinggi yang menjadi komoditas utama desa dan diekspor ke berbagai daerah.',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Sprout,
    title: 'Wisata Alam Air Terjun',
    description: 'Memiliki destinasi wisata air terjun yang masih asri dan menjadi daya tarik utama bagi wisatawan lokal maupun mancanegara.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: ShoppingBag,
    title: 'Kerajinan Tangan Lokal',
    description: 'Warga desa aktif memproduksi kerajinan tangan dari bahan-bahan alami yang memiliki nilai jual tinggi.',
    image: 'https://images.unsplash.com/photo-1572095704828-51a65623c88c?auto=format&fit=crop&q=80&w=1000'
  }
];

function Potensi() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Potensi Unggulan Desa
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {potentials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-8 h-8 text-teal-400" />
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                </div>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Potensi;
