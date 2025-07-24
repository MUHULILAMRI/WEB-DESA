import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?auto=format&fit=crop&q=80&w=1200", alt: "Pemandangan desa dari atas bukit" },
  { id: 2, src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=1200", alt: "Suasana pasar tradisional di pagi hari" },
  { id: 3, src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200", alt: "Anak-anak bermain di sawah" },
  { id: 4, src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200", alt: "Upacara adat tahunan" },
  { id: 5, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200", alt: "Rumah-rumah penduduk yang asri" },
  { id: 6, src: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1200", alt: "Kerajinan tangan khas desa" }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Galeri Desa</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="cursor-pointer rounded-lg overflow-hidden group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Tampilan Penuh" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;