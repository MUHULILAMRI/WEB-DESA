import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SuratKeteranganUsaha from './templates/SuratKeteranganUsaha';
import SuratPengantar from './templates/SuratPengantar';
import SuratKeteranganDomisili from './templates/SuratKeteranganDomisili';
import TemplateUploader from './templates/TemplateUploader';

const tabs = [
  { id: 'sku', label: 'Ket. Usaha' },
  { id: 'sp', label: 'Pengantar' },
  { id: 'skd', label: 'Domisili' },
  { id: 'upload', label: 'Unggah Template' },
];

function LayananAdministrasi() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case 'sku':
        return <SuratKeteranganUsaha />;
      case 'sp':
        return <SuratPengantar />;
      case 'skd':
        return <SuratKeteranganDomisili />;
      case 'upload':
        return <TemplateUploader />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-28">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Layanan Administrasi Online
          </h1>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Pilih jenis surat yang ingin Anda buat, atau unggah template Microsoft Word (.docx) Anda sendiri untuk membuat surat custom.
          </p>
        </motion.div>

        <div className="flex justify-center border-b border-gray-700 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-teal-400' : 'text-gray-400'
              } relative py-4 px-4 sm:px-6 text-sm sm:text-lg font-medium transition-colors duration-300 focus:outline-none`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LayananAdministrasi;
