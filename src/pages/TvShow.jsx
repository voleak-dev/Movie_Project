import React, { useState } from 'react';
import { FaSearch, FaFilter, FaPlay, FaStar, FaCalendarAlt, FaTv, FaEye } from 'react-icons/fa';

const TvShow = ({ onShowClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ទាំងអស់');
  const [selectedType, setSelectedType] = useState('ទាំងអស់');

  // TV Shows Data
  const tvShows = [
    // Drama Series
    {
      id: 101,
      title: "ទេពធីតារតនាគ្រុឌ",
      titleEn: "The Golden Peacock",
      rating: "8.7",
      episodes: "៥០ ភាគ",
      year: "២០២៣",
      genre: "រឿងក្នុងរាជវាំង",
      type: "រឿងវគ្គ",
      description: "រឿងពីព្រះនាងដ៏ស្រស់ស្អាតមួយអង្គដែលត្រូវគេសម្លាប់គ្រួសារនិងត្រូវរត់គេចខ្លួន។ នាងត្រូវដោះស្រាយអាថ៌កំបាំងនិងសងសឹកគ្រួសារ។",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, ចាន់ ស៊ីណា",
      image: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-01-26/a5fef0b1-4396-4cbe-bdb3-ae2e65104362.jpeg",
      ongoing: true
    },
    {
      id: 102,
      title: "ស្នេហាក្រោមព្រះចន្ទ",
      titleEn: "Love Under the Moon",
      rating: "8.2",
      episodes: "៣៥ ភាគ",
      year: "២០២៤",
      genre: "ស្នេហា",
      type: "រឿងវគ្គ",
      description: "រឿងស្នេហារវាងកវីនិពន្ធកំសាន្តនិងអ្នកចំរៀងល្បី។ ពួកគេត្រូវជួបប្រឈមនឹងឧបសគ្គផ្សេងៗនៅក្នុងឧស្សាហកម្មបទចម្រៀង។",
      cast: "បូរិម ឆាយ, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
      image: "https://www.icac.org.hk/icac/post/issue46/common/share/drama_facebook.jpg",
      ongoing: true
    },
    // Action Series
    {
      id: 103,
      title: "អ្នកការពារជនជាតិ",
      titleEn: "The Protector",
      rating: "9.0",
      episodes: "២៥ ភាគ",
      year: "២០២៤",
      genre: "សកម្មភាព",
      type: "រឿងវគ្គ",
      description: "ក្រុមអ្នកការពារពិសេសត្រូវដោះស្រាយបញ្ហាជាតិសាសន៍និងការពារប្រជាជនពីក្រុមឧក្រិដ្ឋ។",
      cast: "សុខ សេរី, បូរិម ឆាយ, ចាន់ ស៊ីណា",
      image: "https://chinesemov.com/tv/images/2011/ghetto-justice-2011-2.jpg",
      ongoing: false
    },
    // Comedy Series
    {
      id: 104,
      title: "គ្រួសាររបស់ខ្ញុំ",
      titleEn: "My Family",
      rating: "7.8",
      episodes: "១០០ ភាគ",
      year: "២០២៣-២០២៤",
      genre: "កំប្លែង",
      type: "រឿងវគ្គ",
      description: "រឿងកំប្លែងអំពីគ្រួសារមួយដែលមានជីវិតគួរឱ្យសើចនិងព្រឹត្តិការណ៍ប្រចាំថ្ងៃដែលគ្រប់គ្នាអាចទាក់ទងបាន។",
      cast: "ឃីម សុផល, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
      image: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-08-22/79250f68-dca0-4b07-a0ec-281519104e6c.jpeg",
      ongoing: true
    },
    // Horror Series
    {
      id: 105,
      title: "ផ្ទះខ្មោចចាស់",
      titleEn: "The Old Haunted House",
      rating: "8.5",
      episodes: "២០ ភាគ",
      year: "២០២៤",
      genre: "រន្ធត់",
      type: "រឿងវគ្គ",
      description: "ក្រុមយុវជនទទួលមរតកផ្ទះចាស់មួយដែលមានវិញ្ញាណអារក្សសណ្ឋិតនៅ។ ពួកគេត្រូវស្វែងរកការពិតនិងដោះស្រាយអាថ៌កំបាំង។",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, ចាន់ ស៊ីណា",
      image: "https://prod98.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%278636378%27&EntityType=%27Item%27&EntityId=%27523451%27&Width=1080&Height=810&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27",
      ongoing: true
    },
    // Fantasy Series
    {
      id: 106,
      title: "រឿងព្រេងនិទាន",
      titleEn: "Legendary Tales",
      rating: "8.9",
      episodes: "៣០ ភាគ",
      year: "២០២៤",
      genre: "រឿងព្រេង",
      type: "រឿងវគ្គ",
      description: "រឿងពីពិភពនិទានដែលមានវិញ្ញាណនិងអារក្ស។ តួឯកត្រូវធ្វើដំណើរឆ្លងកាត់ពិភពផ្សេងៗដើម្បីសង្គ្រោះពិភពលោក។",
      cast: "បូរិម ឆាយ, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/06/09/a4965760-478f-406b-82fb-4f4f86632f4a_90200955.jpg?itok=zxAl8qpK&v=1749473556",
      ongoing: false
    },
    // Reality Shows
    {
      id: 107,
      title: "សម្រាប់ស្នេហា",
      titleEn: "For Love",
      rating: "7.5",
      episodes: "១៥ ភាគ",
      year: "២០២៤",
      genre: "រឿងពិត",
      type: "កម្មវិធី",
      description: "កម្មវិធីស្វែងរកស្នេហាដែលបុរសនិងស្ត្រីត្រូវជ្រើសរើសដៃគូរបស់ពួកគេតាមរយៈភាពចម្លែកផ្សេងៗ។",
      cast: "អ្នកដឹកនាំកម្មវិធី, អ្នកចូលរួម",
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/06/09/a4965760-478f-406b-82fb-4f4f86632f4a_90200955.jpg?itok=zxAl8qpK&v=1749473556",
      ongoing: true
    },
    // Talk Shows
    {
      id: 108,
      title: "ការពិភាក្សាជាមួយសត្យា",
      titleEn: "Discussion with Satya",
      rating: "8.0",
      episodes: "២០០+ ភាគ",
      year: "២០២៣-២០២៤",
      genre: "ការពិភាក្សា",
      type: "កម្មវិធី",
      description: "កម្មវិធីពិភាក្សាអំពីប្រធានបទសង្គម វប្បធម៌ និងជីវិតប្រចាំថ្ងៃជាមួយភ្ញៀវផ្សេងៗ។",
      cast: "សត្យា (អ្នកដឹកនាំកម្មវិធី)",
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/06/09/a4965760-478f-406b-82fb-4f4f86632f4a_90200955.jpg?itok=zxAl8qpK&v=1749473556",
      ongoing: true
    },
    // Music Shows
    {
      id: 109,
      title: "សម្លេងខ្មែរ",
      titleEn: "Khmer Voice",
      rating: "8.3",
      episodes: "១២ ភាគ",
      year: "២០២៤",
      genre: "តន្ត្រី",
      type: "កម្មវិធី",
      description: "កម្មវិធីប្រកួតចម្រៀងដ៏ធំបំផុតនៅកម្ពុជា ដោយស្វែងរកសម្លេងថ្មីៗដែលមានទេពកោសល្យ។",
      cast: "អ្នកច្នៃប្រឌិត, អ្នកចូលរួម",
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/06/09/a4965760-478f-406b-82fb-4f4f86632f4a_90200955.jpg?itok=zxAl8qpK&v=1749473556",
      ongoing: false
    },
    // Documentary Series
    {
      id: 110,
      title: "កម្ពុជារបស់យើង",
      titleEn: "Our Cambodia",
      rating: "9.2",
      episodes: "១០ ភាគ",
      year: "២០២៤",
      genre: "ឯកសារ",
      type: "រឿងវគ្គ",
      description: "រឿងឯកសារអំពីប្រវត្តិសាស្ត្រ វប្បធម៌ និងធម្មជាតិដ៏ស្រស់ស្អាតនៃប្រទេសកម្ពុជា។",
      cast: "អ្នកនិពន្ធ និងអ្នកស្រាវជ្រាវ",
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/06/09/a4965760-478f-406b-82fb-4f4f86632f4a_90200955.jpg?itok=zxAl8qpK&v=1749473556",
      ongoing: false
    }
  ];

  // Genres
  const genres = [
    'ទាំងអស់',
    'រឿងក្នុងរាជវាំង',
    'ស្នេហា',
    'សកម្មភាព',
    'កំប្លែង',
    'រន្ធត់',
    'រឿងព្រេង',
    'រឿងពិត',
    'ការពិភាក្សា',
    'តន្ត្រី',
    'ឯកសារ'
  ];

  // Types
  const types = [
    'ទាំងអស់',
    'រឿងវគ្គ',
    'កម្មវិធី'
  ];

  // Filter shows
  const filteredShows = tvShows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         show.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'ទាំងអស់' || show.genre === selectedGenre;
    const matchesType = selectedType === 'ទាំងអស់' || show.type === selectedType;
    return matchesSearch && matchesGenre && matchesType;
  });

  // Handle show click
  const handleShowClick = (showId) => {
    if (onShowClick) {
      onShowClick(showId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-khmer">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaTv className="text-purple-500 text-4xl" />
            <h1 className="text-4xl md:text-5xl font-bold">កម្មវិធីទូរទស្សន៍</h1>
          </div>
          <p className="text-gray-300 text-lg">ទស្សនារឿងវគ្គនិងកម្មវិធីទូរទស្សន៍ខ្មែរល្អៗ</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="ស្វែងរកកម្មវិធីទូរទស្សន៍..."
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Genre Filter */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaFilter />
            </div>
            <select
              className="bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-10 py-4 text-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 appearance-none"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaFilter />
            </div>
            <select
              className="bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-10 py-4 text-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 appearance-none"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-400">
            បានរកឃើញ <span className="text-purple-500 font-bold">{filteredShows.length}</span> កម្មវិធី
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">ស្ថានភាព:</span>
              <button className={`px-3 py-1 rounded-lg ${selectedType === 'ទាំងអស់' ? 'bg-purple-600' : 'bg-gray-800'}`}>
                ទាំងអស់
              </button>
              <button className="px-3 py-1 bg-green-600/20 text-green-500 rounded-lg border border-green-600/30">
                កំពុងចាក់
              </button>
              <button className="px-3 py-1 bg-blue-600/20 text-blue-500 rounded-lg border border-blue-600/30">
                បានបញ្ចប់
              </button>
            </div>
          </div>
        </div>

        {/* TV Shows Grid */}
        {filteredShows.length === 0 ? (
          <div className="text-center py-20">
            <FaTv className="text-gray-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">មិនមានកម្មវិធី</h3>
            <p className="text-gray-400">កម្មវិធីដែលអ្នកកំពុងស្វែងរកមិនមាននៅក្នុងប្រព័ន្ធទេ។</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredShows.map((show) => (
              <div 
                key={show.id} 
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleShowClick(show.id)}
              >
                {/* Show Poster */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <FaPlay /> ទស្សនាឥឡូវនេះ
                      </button>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="text-white font-bold text-sm">{show.rating}</span>
                  </div>

                  {/* Ongoing/Completed Badge */}
                  <div className={`absolute top-3 left-3 ${show.ongoing ? 'bg-green-600/90' : 'bg-blue-600/90'} backdrop-blur-md px-3 py-1.5 rounded-lg`}>
                    <span className="text-white font-bold text-sm">
                      {show.ongoing ? 'កំពុងចាក់' : 'បានបញ្ចប់'}
                    </span>
                  </div>

                  {/* TV Icon */}
                  <div className="absolute bottom-3 right-3 bg-purple-600/80 p-2 rounded-lg">
                    <FaTv className="text-white" size={16} />
                  </div>
                </div>

                {/* Show Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-purple-500 transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 italic line-clamp-1">
                    {show.titleEn}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <FaEye className="text-purple-500" size={12} />
                        <span>{show.episodes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-purple-500" size={12} />
                        <span>{show.year}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="bg-purple-600/20 text-purple-500 text-xs px-2 py-1 rounded">
                        {show.genre}
                      </span>
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                        {show.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                    {show.description}
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">តួសម្តែង:</span> {show.cast.substring(0, 40)}...
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-600 pl-4">ប្រភេទពិសេស</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-800/30">
              <h3 className="font-bold text-lg mb-2">រឿងក្នុងរាជវាំង</h3>
              <p className="text-gray-300 text-sm">រឿងប្រវត្តិសាស្ត្រនិងព្រះរាជវាំង</p>
              <div className="mt-4 text-purple-500">១២ រឿង</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-800/30">
              <h3 className="font-bold text-lg mb-2">រឿងស្នេហា</h3>
              <p className="text-gray-300 text-sm">រឿងស្នេហាស្នេហាស្រឡាញ់</p>
              <div className="mt-4 text-blue-500">២៥ រឿង</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-800/30">
              <h3 className="font-bold text-lg mb-2">រឿងសកម្មភាព</h3>
              <p className="text-gray-300 text-sm">រឿងវីរកថានិងចម្បាំង</p>
              <div className="mt-4 text-red-500">១៨ រឿង</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-800/30">
              <h3 className="font-bold text-lg mb-2">កម្មវិធីពិត</h3>
              <p className="text-gray-300 text-sm">កម្មវិធីពិតនិងការពិភាក្សា</p>
              <div className="mt-4 text-green-500">៣៥ កម្មវិធី</div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {filteredShows.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
              មុន
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold">
              1
            </button>
            <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
              បន្ទាប់
            </button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">ស្ថិតិកម្មវិធីទូរទស្សន៍</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-purple-500 mb-2">{tvShows.length}+</div>
            <div className="text-gray-300">កម្មវិធីសរុប</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-purple-500 mb-2">8.4</div>
            <div className="text-gray-300">ការវាយតម្លៃមធ្យម</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-purple-500 mb-2">6</div>
            <div className="text-gray-300">កម្មវិធីកំពុងចាក់</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-purple-500 mb-2">1000+</div>
            <div className="text-gray-300">ភាគសរុប</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShow;