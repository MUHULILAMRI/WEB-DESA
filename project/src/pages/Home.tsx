import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Building2, TreeDeciduous, Award } from 'lucide-react';

function Home() {
  const featuredRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div 
        className="relative h-[700px] bg-cover bg-center pt-20 flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-white max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Desa Sejahtera
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-gray-200">
              Menuju desa modern dengan tetap menjaga kearifan lokal dan kelestarian alam.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleScrollToFeatured}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jelajahi Desa <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ onscreen: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              { icon: Users, value: '5,240', label: 'Penduduk' },
              { icon: Building2, value: '12', label: 'UMKM Aktif' },
              { icon: TreeDeciduous, value: '85%', label: 'Ruang Hijau' },
              { icon: Award, value: '15+', label: 'Penghargaan' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl border border-gray-700/50"
                variants={cardVariants}
              >
                <stat.icon className="w-12 h-12 text-teal-400" />
                <div>
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Section */}
      <div ref={featuredRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Keunggulan Desa
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ onscreen: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000",
                title: "Pertanian Organik",
                desc: "Mengembangkan pertanian organik untuk menjaga kelestarian lingkungan."
              },
              {
                img: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1000",
                title: "Destinasi Wisata",
                desc: "Menawarkan pengalaman wisata alam dan budaya yang unik."
              },
              {
                img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000",
                title: "Desa Digital",
                desc: "Mengintegrasikan teknologi untuk pelayanan masyarakat."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 p-6 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                variants={cardVariants}
              >
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;