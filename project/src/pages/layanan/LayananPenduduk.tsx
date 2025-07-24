import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

function LayananPenduduk() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Users className="w-24 h-24 mx-auto text-indigo-400 mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">Data Penduduk</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Halaman ini sedang dalam pengembangan. Nantinya, di sini akan ditampilkan informasi dan statistik kependudukan desa secara visual dan informatif.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default LayananPenduduk;
