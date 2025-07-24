import React, { useState } from 'react';
import { X } from 'lucide-react';

const newsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000",
    alt: "Berita 1",
    date: "12 Maret 2024",
    title: "Pembangunan Pusat Digital Desa",
    snippet: "Desa Sejahtera memulai pembangunan pusat digital untuk meningkatkan literasi teknologi masyarakat...",
    fullText: "Pembangunan pusat digital di Desa Sejahtera telah resmi dimulai. Proyek ini bertujuan untuk memberikan akses internet yang lebih luas dan pelatihan keterampilan digital bagi seluruh warga. Dengan adanya pusat digital ini, diharapkan masyarakat dapat memanfaatkannya untuk pendidikan, ekonomi, dan komunikasi, sehingga mendorong kemajuan desa secara keseluruhan."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000",
    alt: "Berita 2",
    date: "10 Maret 2024",
    title: "Festival Panen Raya",
    snippet: "Masyarakat desa merayakan hasil panen melimpah dengan festival budaya tahunan...",
    fullText: "Festival Panen Raya tahun ini berlangsung meriah dengan berbagai pertunjukan seni dan budaya. Acara ini tidak hanya menjadi ajang syukur atas hasil panen yang melimpah, tetapi juga sebagai sarana untuk melestarikan tradisi lokal dan mempererat tali persaudaraan antarwarga. Berbagai produk pertanian unggulan juga dipamerkan dalam festival ini."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1000",
    alt: "Berita 3",
    date: "8 Maret 2024",
    title: "Program Desa Wisata",
    snippet: "Pengembangan destinasi wisata alam dan budaya untuk mendukung ekonomi lokal...",
    fullText: "Program Desa Wisata terus dikembangkan dengan menambah berbagai fasilitas pendukung dan promosi yang lebih gencar. Potensi alam seperti air terjun dan persawahan yang indah, serta keunikan budaya lokal, menjadi daya tarik utama. Diharapkan program ini dapat meningkatkan pendapatan asli desa dan membuka lapangan kerja baru bagi masyarakat."
  }
];

function News() {
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null);

  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Berita Terkini</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map(news => (
            <div 
              key={news.id}
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedNews(news)}
            >
              <img 
                src={news.img}
                alt={news.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-green-400 mb-2">{news.date}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
                <p className="text-gray-300">{news.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedNews.title}</h2>
                <button onClick={() => setSelectedNews(null)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <img 
                src={selectedNews.img}
                alt={selectedNews.alt}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-green-400 mb-4">{selectedNews.date}</p>
              <p className="text-gray-300 whitespace-pre-wrap">{selectedNews.fullText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;