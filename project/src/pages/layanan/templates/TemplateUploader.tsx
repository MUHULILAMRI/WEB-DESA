import React, { useState, useRef } from 'react';
import { UploadCloud, Printer, Download } from 'lucide-react';
import * as mammoth from 'mammoth/mammoth.browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TemplateUploader = () => {
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [templateHtml, setTemplateHtml] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const suratRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        if (arrayBuffer) {
          const result = await mammoth.convertToHtml({ arrayBuffer });
          const html = result.value;
          const foundPlaceholders = html.match(/{{(.*?)}}/g)?.map(p => p.slice(2, -2)) || [];
          const uniquePlaceholders = [...new Set(foundPlaceholders)];
          
          setTemplateHtml(html);
          setPlaceholders(uniquePlaceholders);
          setFormData(uniquePlaceholders.reduce((acc, curr) => ({ ...acc, [curr]: '' }), {}));
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getPreviewHtml = () => {
    let preview = templateHtml;
    for (const key in formData) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      preview = preview.replace(regex, formData[key] || `...`);
    }
    return preview;
  };

  const handlePrint = () => { window.print(); };

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
        pdf.save(`surat-custom-${fileName.replace('.docx', '')}.pdf`);
      });
    }
  };

  return (
    <div className="mt-8">
      {!templateHtml ? (
        <div className="text-center bg-gray-800 p-12 rounded-xl border-2 border-dashed border-gray-700">
          <UploadCloud className="mx-auto w-16 h-16 text-gray-500 mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">Unggah Template Surat Anda</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Buat file <code className="bg-gray-700 p-1 rounded">.docx</code> dan gunakan placeholder seperti <code className="bg-gray-700 p-1 rounded">{{nama}}</code> atau <code className="bg-gray-700 p-1 rounded">{{alamat}}</code> untuk data yang dinamis.
          </p>
          <input type="file" accept=".docx" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold">
            Pilih File .docx
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Isi Formulir Dinamis</h3>
            <p className="text-gray-400 mb-4">Formulir ini dibuat otomatis dari file: <strong>{fileName}</strong></p>
            <div className="space-y-4">
              {placeholders.map(p => (
                <div key={p}>
                  <label className="capitalize text-gray-300 mb-1 block">{p.replace(/_/g, ' ')}</label>
                  <input name={p} value={formData[p]} onChange={handleInputChange} className="w-full p-3 bg-gray-700 rounded-md text-white" />
                </div>
              ))}
            </div>
             <button onClick={() => setTemplateHtml('')} className="w-full mt-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                Unggah Template Lain
            </button>
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
              <div dangerouslySetInnerHTML={{ __html: getPreviewHtml() }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateUploader;
