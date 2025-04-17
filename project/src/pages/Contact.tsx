import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Hubungi Kami</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <Phone className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Telepon</h3>
              <p className="text-gray-300">(021) 1234-5678</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <Mail className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@desasejahtera.id</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Alamat</h3>
              <p className="text-gray-300">Jl. Desa Sejahtera No. 123<br />Kecamatan Makmur</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Nama</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Masukkan nama anda"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Masukkan email anda"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Pesan</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400 h-32"
                  placeholder="Tulis pesan anda"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;