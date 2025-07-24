import React from 'react';
import { motion } from 'framer-motion';

function Surat() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pembuatan Surat Otomatis
        </motion.h1>
        
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Formulir Surat</h2>
          <p className="text-gray-400 mb-4">
            Fitur ini sedang dalam pengembangan. Untuk melanjutkan, saya memerlukan beberapa informasi dari Anda.
          </p>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-teal-400 mb-3">Pertanyaan untuk Anda:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Jenis surat apa yang ingin Anda buat secara otomatis? (Contoh: Surat Keterangan Usaha, Surat Pengantar, dll.)</li>
              <li>Data apa saja yang diperlukan untuk setiap jenis surat?</li>
              <li>Apakah Anda ingin surat tersebut dapat diunduh sebagai file PDF?</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Surat;
