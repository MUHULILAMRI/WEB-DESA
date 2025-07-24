import React, { useState, useRef } from 'react';
import { Printer, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SuratKeteranganUsaha = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nik: '',
    ttl: '',
    pekerjaan: '',
    alamat: '',
    namaUsaha: '',
    jenisUsaha: '',
    alamatUsaha: '',
    tanggalSurat: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
  });

  const suratRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const input = suratRef.current;
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const ratio = canvas.width / canvas.height;
        const width = pdfWidth - 20;
        const height = width / ratio;
        pdf.addImage(imgData, 'PNG', 10, 10, width, height);
        pdf.save(`surat-keterangan-usaha-${formData.nama || 'warga'}.pdf`);
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
      <div className="bg-gray-800 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-white mb-6">Formulir Surat Keterangan Usaha</h3>
        <div className="space-y-4">
          <input name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama Lengkap" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <input name="nik" value={formData.nik} onChange={handleChange} placeholder="NIK" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <input name="ttl" value={formData.ttl} onChange={handleChange} placeholder="Tempat, Tanggal Lahir" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <input name="pekerjaan" value={formData.pekerjaan} onChange={handleChange} placeholder="Pekerjaan" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <textarea name="alamat" value={formData.alamat} onChange={handleChange} placeholder="Alamat Lengkap" className="w-full p-3 bg-gray-700 rounded-md text-white h-24" />
          <h4 className="text-xl font-semibold text-white pt-4">Detail Usaha</h4>
          <input name="namaUsaha" value={formData.namaUsaha} onChange={handleChange} placeholder="Nama Usaha" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <input name="jenisUsaha" value={formData.jenisUsaha} onChange={handleChange} placeholder="Jenis Usaha" className="w-full p-3 bg-gray-700 rounded-md text-white" />
          <textarea name="alamatUsaha" value={formData.alamatUsaha} onChange={handleChange} placeholder="Alamat Usaha" className="w-full p-3 bg-gray-700 rounded-md text-white h-24" />
        </div>
      </div>
      <div>
        <div className="flex justify-end items-center mb-4 gap-2">
          <button onClick={handlePrint} className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 no-print">
            <Printer className="w-5 h-5" /> Cetak
          </button>
          <button onClick={handleDownloadPDF} className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 no-print">
            <Download className="w-5 h-5" /> Unduh PDF
          </button>
        </div>
        <div id="surat-preview" ref={suratRef} className="bg-white text-gray-900 p-8 rounded-md shadow-lg">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold uppercase">Pemerintah Kabupaten Gowa</h4>
            <h5 className="text-lg font-bold uppercase">Kecamatan Somba Opu</h5>
            <h5 className="text-lg font-bold uppercase">Desa Sejahtera</h5>
            <p className="text-sm">Jl. Poros Malino Km. 10, Gowa, Sulawesi Selatan</p>
            <hr className="border-t-4 border-gray-900 my-2" />
          </div>
          <div className="text-center mb-8">
            <p className="font-bold underline uppercase">Surat Keterangan Usaha</p>
            <p>Nomor: 145 / SKU / DS / {new Date().getMonth() + 1} / {new Date().getFullYear()}</p>
          </div>
          <div className="text-justify space-y-4">
            <p>Yang bertanda tangan di bawah ini, Kepala Desa Sejahtera, Kecamatan Somba Opu, Kabupaten Gowa, dengan ini menerangkan bahwa:</p>
            <table className="w-full">
              <tbody>
                <tr><td className="w-1/3 pl-8">Nama</td><td>: {formData.nama || '...'}</td></tr>
                <tr><td className="pl-8">NIK</td><td>: {formData.nik || '...'}</td></tr>
                <tr><td className="pl-8">Tempat/Tgl. Lahir</td><td>: {formData.ttl || '...'}</td></tr>
                <tr><td className="pl-8">Pekerjaan</td><td>: {formData.pekerjaan || '...'}</td></tr>
                <tr><td className="pl-8 align-top">Alamat</td><td className="align-top">: {formData.alamat || '...'}</td></tr>
              </tbody>
            </table>
            <p>Berdasarkan pengamatan kami, nama tersebut di atas adalah benar penduduk desa kami dan memiliki usaha sebagai berikut:</p>
            <table className="w-full">
              <tbody>
                <tr><td className="w-1/3 pl-8">Nama Usaha</td><td>: {formData.namaUsaha || '...'}</td></tr>
                <tr><td className="pl-8">Jenis Usaha</td><td>: {formData.jenisUsaha || '...'}</td></tr>
                <tr><td className="pl-8 align-top">Alamat Usaha</td><td className="align-top">: {formData.alamatUsaha || '...'}</td></tr>
              </tbody>
            </table>
            <p>Demikian Surat Keterangan Usaha ini kami buat untuk dipergunakan sebagaimana mestinya.</p>
          </div>
          <div className="flex justify-end mt-16">
            <div className="text-center">
              <p>Desa Sejahtera, {formData.tanggalSurat}</p>
              <p>Kepala Desa Sejahtera</p>
              <br /><br /><br />
              <p className="font-bold underline">BUDI SANTOSO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuratKeteranganUsaha;
