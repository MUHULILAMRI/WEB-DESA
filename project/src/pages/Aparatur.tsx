import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield } from 'lucide-react';

const officials = [
  {
    name: 'Budi Santoso',
    position: 'Kepala Desa',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Siti Aminah',
    position: 'Sekretaris Desa',
    avatar: 'https://i.pravatar.cc/150?img=49',
  },
  {
    name: 'Ahmad Dahlan',
    position: 'Kaur Keuangan',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Dewi Lestari',
    position: 'Kaur Perencanaan',
    avatar: 'https://i.pravatar.cc/150?img=35',
  },
  {
    name: 'Joko Susilo',
    position: 'Kasi Pemerintahan',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Rina Wati',
    position: 'Kasi Kesejahteraan',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
];

function Aparatur() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aparatur Desa
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mengenal lebih dekat tim yang berdedikasi untuk melayani dan memajukan desa.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {officials.map((official, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={official.avatar} 
                alt={official.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
              />
              <h2 className="text-xl font-semibold text-white">{official.name}</h2>
              <p className="text-teal-400">{official.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aparatur;
