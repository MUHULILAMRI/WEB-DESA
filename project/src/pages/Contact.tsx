import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Pesan Anda telah berhasil dikirim! Terima kasih.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    } else {
      setFormStatus('Harap isi semua kolom sebelum mengirim.');
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nama</label>
                <input 
                  id="name"
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Masukkan nama anda"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Masukkan email anda"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Pesan</label>
                <textarea 
                  id="message"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-400 h-32"
                  placeholder="Tulis pesan anda"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
            {formStatus && (
              <p className="mt-4 text-center text-green-400">{formStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;