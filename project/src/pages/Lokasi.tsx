import React from 'react';
import { motion } from 'framer-motion';

function Lokasi() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lokasi Desa Kami
        </motion.h1>
        
        <motion.div 
          className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.186663341982!2d120.1889060147645!3d-5.222312696200409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db0df4f15e8a57d%3A0x8a1f8b53a4a5b5e8!2sBenteng%20Malewang!5e0!3m2!1sen!2sid!4v1662542194833!5m2!1sen!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Desa Benteng Malewang"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Lokasi;
