import React from 'react';
import { Link } from 'react-router-dom'; // ១. Import Link

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* ផ្នែកទី១: Logo និងការពិពណ៌នា */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-red-600 text-2xl font-bold tracking-tighter uppercase italic">
              Movie<span className="text-white">Kh</span>
            </span>
            <p className="mt-4 text-sm leading-6">
              គេហទំព័រឈានមុខគេក្នុងការផ្តល់ជូននូវភាពយន្តខ្មែរ និងអន្តរជាតិ ដែលមានគុណភាពច្បាស់កម្រិត HD។ ទស្សនាដោយសេរីគ្រប់ពេលវេលា។
            </p>
          </div>

          {/* ផ្នែកទី២: តំណភ្ជាប់រហ័ស - ប្តូរ <a> ទៅ <Link> */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-red-600 pl-3">តំណភ្ជាប់រហ័ស</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">ទំព័រដើម</Link></li>
              <li><Link to="/new-movies" className="hover:text-red-500 transition-colors">ភាពយន្តចេញថ្មី</Link></li>
              <li><Link to="/korean-series" className="hover:text-red-500 transition-colors">ភាពយន្តភាគកូរ៉េ</Link></li>
              <li><Link to="/apps" className="hover:text-red-500 transition-colors">កម្មវិធីទូរស័ព្ទ</Link></li>
            </ul>
          </div>

          {/* ផ្នែកទី៣: ជំនួយ និងសុវត្ថិភាព - ប្តូរ <a> ទៅ <Link> */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-red-600 pl-3">ជំនួយ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-red-500 transition-colors">សំណួរដែលសួរញឹកញាប់</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">ទំនាក់ទំនងយើង</Link></li>
              <li><Link to="/terms" className="hover:text-red-500 transition-colors">លក្ខខណ្ឌប្រើប្រាស់</Link></li>
              <li><Link to="/privacy" className="hover:text-red-500 transition-colors">គោលការណ៍ឯកជនភាព</Link></li>
            </ul>
          </div>

          {/* ផ្នែកទី៤: បណ្តាញសង្គម - ប្រើ <a> ជាមួយ Link ពិត ឬ use target="_blank" */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-red-600 pl-3">តាមដានយើង</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
            <p className="mt-4 text-xs">ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មានថ្មីៗ</p>
          </div>

        </div>

        {/* ផ្នែកខាងក្រោមបង្អស់ */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-xs">
          <p>© ២០២៦ MovieKh. រក្សាសិទ្ធិគ្រប់យ៉ាងដោយក្រុមការងាររបស់យើង។</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;