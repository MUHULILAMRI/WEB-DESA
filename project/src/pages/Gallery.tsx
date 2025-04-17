import React from 'react';

function Gallery() {
  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Galeri Desa</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 1" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 2" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 3" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 4" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 5" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri 6" 
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;