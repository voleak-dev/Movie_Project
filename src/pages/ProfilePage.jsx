import React, { useState } from 'react';
import { 
  FaCamera, FaEdit, FaShareAlt, FaUser, FaCog, 
  FaHistory, FaTrophy, FaGem, FaMask, FaBolt 
} from 'react-icons/fa';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('ព័ត៌មានផ្ទាល់ខ្លួន');

  const stats = [
    { label: 'ភាពយន្ត', value: '87' },
    { label: 'រឿងភាគ', value: '23' },
    { label: 'ម៉ោង', value: '245h' },
    { label: 'សមាជិក', value: '36 ខែ' },
  ];

  const tabs = [
    { id: 'ព័ត៌មានផ្ទាល់ខ្លួន', icon: FaUser },
    { id: 'ការកំណត់', icon: FaCog },
    { id: 'ប្រវត្តិ', icon: FaHistory },
    { id: 'ត្រាសម្គាល់', icon: FaTrophy },
    { id: 'ការពារ', icon: FaGem },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white font-khmer pb-10">
      {/* Header / Banner */}
      <div className="relative h-64 w-full">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80" 
          className="w-full h-full object-cover opacity-90" 
          alt="Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Profile Info Section */}
        <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end gap-6 pb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-teal-500 flex items-center justify-center border-4 border-[#0a0c10] overflow-hidden">
               {/* ជំនួសដោយរូបភាព Profile របស់អ្នក */}
               <div className="text-white text-6xl">☺</div> 
            </div>
            <button className="absolute bottom-2 right-0 bg-red-600 p-2 rounded-full border-2 border-[#0a0c10]">
              <FaCamera size={12} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">ជេគីចាន</h1>
            <p className="text-gray-400 text-sm mb-4">@JackeyChan</p>
            
            <div className="flex justify-center md:justify-start gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-all text-sm font-medium">
              <FaEdit /> កែសម្រួល
            </button>
            <button className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all text-sm font-medium border border-gray-700">
              ចែករំលែក
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-sm whitespace-nowrap ${
                activeTab === tab.id 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-[#161b22] text-gray-400 hover:bg-gray-800'
              }`}
            >
              <tab.icon size={16} />
              {tab.id}
            </button>
          ))}
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Personal Info */}
          <div className="lg:col-span-2 bg-[#10141b] border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-8">ព័ត៌មានផ្ទាល់ខ្លួន</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">អ៊ីមែល</label>
                <div className="text-gray-200">Jackey@moviekh.com</div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">លេខទូរស័ព្ទ</label>
                <div className="text-gray-200">+855 12 345 678</div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">ថ្ងៃខែឆ្នាំកំណើត</label>
                <div className="text-gray-200">1995-08-15</div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">ភេទ</label>
                <div className="text-gray-200">ប្រុស</div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">ទីតាំង</label>
                <div className="text-gray-200">ភ្នំពេញ, កម្ពុជា</div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">កាលបរិច្ឆេទចូល</label>
                <div className="text-gray-200">2023-01-15</div>
              </div>
            </div>
            <div className="mt-8">
               <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wider">ព័ត៌មានបន្ថែម</label>
               <div className="text-gray-500 italic">- មិនមានព័ត៌មាន -</div>
            </div>
          </div>

          {/* Right Column: Sidebar Panels */}
          <div className="space-y-6">
            {/* Preferred Genres */}
            <div className="bg-[#10141b] border border-gray-800 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 text-md font-bold mb-5">
                <FaMask className="text-blue-500" /> ប្រភេទចូលចិត្ត
              </h3>
              <div className="flex flex-wrap gap-2">
                {['វាយប្រហារ', 'រន្ធត់', 'កំប្លែង', 'មនោសញ្ចេតនា', 'ហ្វេនតាស៊ី', 'វិទ្យាសាស្ត្រ', 'ប្រលោមលោក'].map((genre) => (
                  <span key={genre} className="bg-[#1c2128] text-gray-300 px-3 py-1.5 rounded-full text-xs border border-gray-700 hover:border-gray-500 cursor-default">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Account Activity */}
            <div className="bg-[#10141b] border border-gray-800 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 text-md font-bold mb-4">
                <FaBolt className="text-yellow-500" /> សកម្មភាពគណនី
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xs text-gray-400">កំពុងមានសកម្មភាព</p>
                </div>
                {/* បន្ថែមសកម្មភាពផ្សេងៗនៅទីនេះ */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;