import React, { useState } from 'react';
import { FaFire, FaStar, FaPlay, FaCalendarAlt, FaFilter, FaTv, FaFilm } from 'react-icons/fa';

const PopularPage = ({ onItemClick }) => {
  const [selectedTab, setSelectedTab] = useState('ទាំងអស់');
  const [selectedTime, setSelectedTime] = useState('សប្តាហ៍នេះ');

  // Popular Movies Data
  const popularMovies = [
    {
      id: 1,
      title: "រឿង បិសាចក្នុងព្រៃ",
      titleEn: "Ghost in the Jungle",
      rating: "8.5",
      views: "1.2M",
      year: "២០២៤",
      category: "រន្ធត់",
      trending: 1,
      type: "ភាពយន្ត",
      description: "រឿងអំពីក្រុមយុវជនដែលធ្វើដំណើរទៅរុករកព្រៃដ៏សែនដាច់ស្រយាល...",
      image: "https://m.media-amazon.com/images/I/81xniMPBlAL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "អាណាចក្រភពផ្កាយ",
      titleEn: "Star Empire",
      rating: "9.2",
      views: "2.5M",
      year: "២០២៤",
      category: "វិទ្យាសាស្ត្រ",
      trending: 2,
      type: "ភាពយន្ត",
      description: "រឿងអំពីអាណាចក្រអវកាសដ៏ធំធេងដែលកំពុងជួបប្រទះនឹងគ្រោះថ្នាក់...",
      image: "https://m.media-amazon.com/images/I/81bzQh-M1DL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 3,
      title: "បេសកកម្មគ្រោះថ្នាក់",
      titleEn: "Dangerous Mission",
      rating: "8.9",
      views: "980K",
      year: "២០២៤",
      category: "សកម្មភាព",
      trending: 3,
      type: "ភាពយន្ត",
      description: "ក្រុមពិសេសត្រូវចូលទៅក្នុងទឹកដីសត្រូវដើម្បីសង្គ្រោះអ្នកសង្ស័យ...",
      image: "https://cdn.cinematerial.com/p/297x/osu2gdkh/tom-and-jerry-movie-poster-md.jpg?v=1614079055"
    },
    {
      id: 4,
      title: "យុទ្ធសាស្ត្រមេឃខ្មៅ",
      titleEn: "Black Sky Tactics",
      rating: "8.7",
      views: "1.8M",
      year: "២០២៤",
      category: "សកម្មភាព",
      trending: 4,
      type: "ភាពយន្ត",
      description: "ក្រុមអាវកាសយានិកឈ្នះត្រូវតែដោះស្រាយជាមួយនឹងការបះបោរ...",
      image: "https://i.ytimg.com/vi/aATJpu37U6g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuQ4UQ5K7_V5gd8S6mSBmu8IvU2g"
    },
    {
      id: 5,
      title: "អាថ៌កំបាំងក្រុងបុរាណ",
      titleEn: "Ancient City Secrets",
      rating: "8.2",
      views: "750K",
      year: "២០២៤",
      category: "រន្ធត់",
      trending: 5,
      type: "ភាពយន្ត",
      description: "ក្រុមអ្នកស្រាវជ្រាវត្រូវជួបប្រទះនឹងអាថ៌កំបាំងដ៏គួរឱ្យរន្ធត់...",
      image: "https://i.ytimg.com/vi/GQsiDLqKb5Y/maxresdefault.jpg"
    }
  ];

  // Popular TV Shows Data
  const popularTvShows = [
    {
      id: 101,
      title: "ទេពធីតារតនាគ្រុឌ",
      titleEn: "The Golden Peacock",
      rating: "8.7",
      views: "3.2M",
      year: "២០២៣",
      category: "រឿងក្នុងរាជវាំង",
      trending: 1,
      type: "កម្មវិធីទូរទស្សន៍",
      description: "រឿងពីព្រះនាងដ៏ស្រស់ស្អាតមួយអង្គដែលត្រូវគេសម្លាប់គ្រួសារនិងត្រូវរត់គេចខ្លួន...",
      image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
      episodes: "៥០ ភាគ"
    },
    {
      id: 102,
      title: "ស្នេហាក្រោមព្រះចន្ទ",
      titleEn: "Love Under the Moon",
      rating: "8.2",
      views: "2.8M",
      year: "២០២៤",
      category: "ស្នេហា",
      trending: 2,
      type: "កម្មវិធីទូរទស្សន៍",
      description: "រឿងស្នេហារវាងកវីនិពន្ធកំសាន្តនិងអ្នកចំរៀងល្បី...",
      image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
      episodes: "៣៥ ភាគ"
    },
    {
      id: 103,
      title: "អ្នកការពារជនជាតិ",
      titleEn: "The Protector",
      rating: "9.0",
      views: "4.1M",
      year: "២០២៤",
      category: "សកម្មភាព",
      trending: 3,
      type: "កម្មវិធីទូរទស្សន៍",
      description: "ក្រុមអ្នកការពារពិសេសត្រូវដោះស្រាយបញ្ហាជាតិសាសន៍...",
      image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
      episodes: "២៥ ភាគ"
    },
    {
      id: 104,
      title: "គ្រួសាររបស់ខ្ញុំ",
      titleEn: "My Family",
      rating: "7.8",
      views: "5.6M",
      year: "២០២៣-២០២៤",
      category: "កំប្លែង",
      trending: 4,
      type: "កម្មវិធីទូរទស្សន៍",
      description: "រឿងកំប្លែងអំពីគ្រួសារមួយដែលមានជីវិតគួរឱ្យសើច...",
      image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
      episodes: "១០០ ភាគ"
    },
    {
      id: 105,
      title: "កម្ពុជារបស់យើង",
      titleEn: "Our Cambodia",
      rating: "9.2",
      views: "2.3M",
      year: "២០២៤",
      category: "ឯកសារ",
      trending: 5,
      type: "កម្មវិធីទូរទស្សន៍",
      description: "រឿងឯកសារអំពីប្រវត្តិសាស្ត្រ វប្បធម៌ និងធម្មជាតិដ៏ស្រស់ស្អាត...",
      image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
      episodes: "១០ ភាគ"
    }
  ];

  // All popular items combined
  const allPopularItems = [...popularMovies, ...popularTvShows];

  // Filter items based on selected tab and time
  const filteredItems = selectedTab === 'ទាំងអស់' 
    ? allPopularItems 
    : selectedTab === 'ភាពយន្ត' 
      ? popularMovies 
      : popularTvShows;

  // Sort by views (simulating trending based on time)
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (selectedTime === 'សប្តាហ៍នេះ') {
      return b.views.localeCompare(a.views);
    } else if (selectedTime === 'ខែនេះ') {
      // Simulate different sorting for different time periods
      return b.trending - a.trending;
    } else {
      return b.rating.localeCompare(a.rating);
    }
  });

  // Tabs
  const tabs = ['ទាំងអស់', 'ភាពយន្ត', 'កម្មវិធីទូរទស្សន៍'];

  // Time filters
  const timeFilters = ['សប្តាហ៍នេះ', 'ខែនេះ', 'ឆ្នាំនេះ'];

  // Handle item click
  const handleItemClick = (itemId) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  // Format view count
  const formatViews = (views) => {
    if (views.includes('M')) return views;
    if (views.includes('K')) return views;
    return views;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white font-khmer">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-orange-900/40 via-red-900/40 to-yellow-900/40 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl">
              <FaFire className="text-white text-3xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">ពេញនិយម</h1>
              <p className="text-gray-300 text-lg">ស្វែងយល់ពីអ្វីដែលកំពុងពេញនិយមនៅពេលនេះ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                selectedTab === tab
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab === 'ភាពយន្ត' && <FaFilm />}
              {tab === 'កម្មវិធីទូរទស្សន៍' && <FaTv />}
              {tab === 'ទាំងអស់' && <FaFire />}
              {tab}
            </button>
          ))}
        </div>

        {/* Time Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <FaFilter className="text-gray-400" />
            <h3 className="text-xl font-bold">តម្រៀបតាមពេលវេលា</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {timeFilters.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedTime === time
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            កំពុងបង្ហាញ <span className="text-orange-500 font-bold">{sortedItems.length}</span> ធាតុពេញនិយម
            <span className="mx-2">•</span>
            <span className="text-red-500 font-bold">{selectedTime}</span>
          </p>
        </div>

        {/* Top 5 Trending */}
        {sortedItems.slice(0, 5).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaFire className="text-orange-500" />
              កំពូល 5 ពេញនិយម
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {sortedItems.slice(0, 5).map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative group cursor-pointer"
                  onClick={() => handleItemClick(item.id)}
                >
                  {/* Ranking Badge */}
                  <div className={`absolute -top-3 -left-3 z-10 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-600 to-yellow-800' :
                    index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-900' :
                    'bg-gradient-to-br from-gray-800 to-gray-900'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Item Card */}
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-900/30">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <FaPlay size={12} /> ទស្សនា
                        </button>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-bold ${
                      item.type === 'ភាពយន្ត' 
                        ? 'bg-red-600/80 backdrop-blur-md' 
                        : 'bg-purple-600/80 backdrop-blur-md'
                    }`}>
                      {item.type}
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="mt-4 text-center">
                    <h3 className="font-bold line-clamp-1 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      <FaStar className="inline text-yellow-500 mr-1" size={12} />
                      {item.rating} • {formatViews(item.views)} ទស្សនា
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Popular Items Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">ពេញនិយមទាំងអស់</h2>
          
          {sortedItems.length === 0 ? (
            <div className="text-center py-20">
              <FaFire className="text-gray-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">មិនមានធាតុពេញនិយម</h3>
              <p className="text-gray-400">គ្មានអ្វីពេញនិយមក្នុងពេលនេះទេ។</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sortedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-600 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/10 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handleItemClick(item.id)}
                >
                  {/* Item Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <FaPlay /> ទស្សនាឥឡូវនេះ
                        </button>
                      </div>
                    </div>

                    {/* Trending Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-red-600 backdrop-blur-md px-3 py-1.5 rounded-lg">
                      <span className="text-white font-bold text-sm flex items-center gap-1">
                        <FaFire size={12} /> ពេញនិយម
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1 border border-white/10">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="text-white font-bold text-sm">{item.rating}</span>
                    </div>

                    {/* Views Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg">
                      <span className="text-white font-bold text-sm">{formatViews(item.views)}</span>
                    </div>

                    {/* Type Icon */}
                    <div className={`absolute bottom-3 right-3 p-2 rounded-lg ${
                      item.type === 'ភាពយន្ត' ? 'bg-red-600/80' : 'bg-purple-600/80'
                    }`}>
                      {item.type === 'ភាពយន្ត' ? 
                        <FaFilm className="text-white" size={16} /> : 
                        <FaTv className="text-white" size={16} />
                      }
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 italic line-clamp-1">
                      {item.titleEn}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-orange-500" size={12} />
                          <span>{item.year}</span>
                        </div>
                        {item.episodes && (
                          <>
                            <span>•</span>
                            <span>{item.episodes}</span>
                          </>
                        )}
                      </div>
                      <span className="bg-orange-600/20 text-orange-500 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trending Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-orange-600 pl-4">ប្រភេទពេញនិយម</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-800/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">រឿងរន្ធត់</h3>
                <span className="text-orange-500 font-bold">#1</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">រឿងដែលធ្វើឱ្យអ្នកភ័យខ្លាច</p>
              <div className="text-3xl font-bold text-orange-500">8.5</div>
              <div className="text-gray-400 text-sm">ការវាយតម្លៃមធ្យម</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-2xl p-6 border border-red-800/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">សកម្មភាព</h3>
                <span className="text-red-500 font-bold">#2</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">រឿងចម្បាំងនិងភាពវីរភាព</p>
              <div className="text-3xl font-bold text-red-500">8.7</div>
              <div className="text-gray-400 text-sm">ការវាយតម្លៃមធ្យម</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-800/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">ស្នេហា</h3>
                <span className="text-purple-500 font-bold">#3</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">រឿងស្នេហាស្នេហាស្រឡាញ់</p>
              <div className="text-3xl font-bold text-purple-500">8.2</div>
              <div className="text-gray-400 text-sm">ការវាយតម្លៃមធ្យម</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-800/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">វិទ្យាសាស្ត្រ</h3>
                <span className="text-blue-500 font-bold">#4</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">រឿងអវកាសនិងបច្ចេកវិទ្យា</p>
              <div className="text-3xl font-bold text-blue-500">9.2</div>
              <div className="text-gray-400 text-sm">ការវាយតម្លៃមធ្យម</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">ស្ថិតិពេញនិយម</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {allPopularItems.length}+
              </div>
              <div className="text-gray-300">ធាតុពេញនិយមសរុប</div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">15.2M</div>
              <div className="text-gray-300">ទស្សនាសរុប</div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">8.4</div>
              <div className="text-gray-300">ការវាយតម្លៃមធ្យម</div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-500 mb-2">2024</div>
              <div className="text-gray-300">ឆ្នាំចុងក្រោយ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;