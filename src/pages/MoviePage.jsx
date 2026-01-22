import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar, FaPlay, FaCalendarAlt, FaClock } from 'react-icons/fa';

const MoviePage = ({ onMovieClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ទាំងអស់');
  
  // All movies data
  const allMovies = [
    // Trending Movies (IDs 1-5)
    {
      id: 1,
      title: "រឿង បិសាចក្នុងព្រៃ",
      titleEn: "Ghost in the Jungle",
      rating: "8.5",
      duration: "២ ម៉ោង ១៥ នាទី",
      year: "២០២៤",
      category: "រន្ធត់",
      description: "រឿងអំពីក្រុមយុវជនដែលធ្វើដំណើរទៅរុករកព្រៃដ៏សែនដាច់ស្រយាល...",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, ឃីម សុផល",
      image: "https://m.media-amazon.com/images/I/81xniMPBlAL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "អាណាចក្រភពផ្កាយ",
      titleEn: "Star Empire",
      rating: "9.2",
      duration: "៣ ម៉ោង ០៥ នាទី",
      year: "២០២៤",
      category: "វិទ្យាសាស្ត្រ",
      description: "រឿងអំពីអាណាចក្រអវកាសដ៏ធំធេងដែលកំពុងជួបប្រទះនឹងគ្រោះថ្នាក់...",
      cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
      image: "https://m.media-amazon.com/images/I/81bzQh-M1DL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 3,
      title: "អ្នកប្រយុទ្ធស្មោះស្នេហ៍",
      titleEn: "The Loyal Fighter",
      rating: "7.8",
      duration: "២ ម៉ោង ០០ នាទី",
      year: "២០២៣",
      category: "មនោសញ្ចេតនា",
      description: "រឿងអំពីអ្នកប្រយុទ្ធដែលត្រូវជ្រើសរើសរវាងកេរ្តិ៍ឈ្មោះគ្រួសារ...",
      cast: "ម៉ាលីស ផាន់ដា, សុខ សេរី, បូរិម ឆាយ",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5OTc2MTAtZTdhZi00ODQ5LThhOGMtMjVlMWQyODI2ZWRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 4,
      title: "បេសកកម្មគ្រោះថ្នាក់",
      titleEn: "Dangerous Mission",
      rating: "8.9",
      duration: "២ ម៉ោង ២០ នាទី",
      year: "២០២៤",
      category: "សកម្មភាព",
      description: "ក្រុមពិសេសត្រូវចូលទៅក្នុងទឹកដីសត្រូវដើម្បីសង្គ្រោះអ្នកសង្ស័យ...",
      cast: "Tom Cruise, Emily Blunt, Henry Cavill",
      image: "https://cdn.cinematerial.com/p/297x/osu2gdkh/tom-and-jerry-movie-poster-md.jpg?v=1614079055"
    },
    {
      id: 5,
      title: "អាថ៌កំបាំងកោះងងឹត",
      titleEn: "Dark Island Secrets",
      rating: "8.1",
      duration: "១ ម៉ោង ៥០ នាទី",
      year: "២០២៣",
      category: "ស៊ើបអង្កេត",
      description: "អ្នកស្រាវជ្រាវត្រូវចូលទៅស៊ើបអង្កេតកោះដែលមិនមាននរណាម្នាក់...",
      cast: "សុខ សេរី, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
      image: "https://upload.wikimedia.org/wikipedia/en/6/60/Tom_and_Jerry_Blast_Off_to_Mars_cover.jpg"
    },
    // New Movies (IDs 6-8)
    {
      id: 6,
      title: "គ្រួសារអ្នកប្រយុទ្ធ",
      titleEn: "The Fighter Family",
      rating: "8.5",
      duration: "២ ម៉ោង ១៥ នាទី",
      year: "២០២៤",
      category: "សកម្មភាព",
      description: "រឿងអំពីគ្រួសារដែលមានប្រពៃណីប្រយុទ្ធតាំងពីជំនាន់មួយទៅជំនាន់មួយ...",
      cast: "ម៉ាលីស ផាន់ដា, គឹម សុផល, ចាន់ ស៊ីណា",
      image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/fighting-with-my-family-2019.jpg"
    },
    {
      id: 7,
      title: "អាថ៌កំបាំងក្រុងបុរាណ",
      titleEn: "Ancient City Secrets",
      rating: "8.2",
      duration: "១ ម៉ោង ៤៥ នាទី",
      year: "២០២៤",
      category: "រន្ធត់",
      description: "ក្រុមអ្នកស្រាវជ្រាវត្រូវជួបប្រទះនឹងអាថ៌កំបាំងដ៏គួរឱ្យរន្ធត់...",
      cast: "សុខ សេរី, ឃីម សុផល, បូរិម ផាន់ដា",
      image: "https://i.ytimg.com/vi/GQsiDLqKb5Y/maxresdefault.jpg"
    },
    {
      id: 8,
      title: "យុទ្ធសាស្ត្រមេឃខ្មៅ",
      titleEn: "Black Sky Tactics",
      rating: "8.7",
      duration: "១ ម៉ោង ៥៨ នាទី",
      year: "២០២៤",
      category: "សកម្មភាព",
      description: "ក្រុមអាវកាសយានិកឈ្នះត្រូវតែដោះស្រាយជាមួយនឹងការបះបោរ...",
      cast: "Tom Cruise, Emily Blunt, John Krasinski",
      image: "https://i.ytimg.com/vi/aATJpu37U6g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuQ4UQ5K7_V5gd8S6mSBmu8IvU2g"
    },
    // Khmer Movies (IDs 9-13)
    {
      id: 9,
      title: "នេសាទក្រពើ",
      titleEn: "Crocodile Hunter",
      rating: "8.8",
      duration: "២ ម៉ោង ១០ នាទី",
      year: "២០២៣",
      category: "រឿងព្រេង",
      description: "រឿងអំពីអ្នកនេសាទក្រពើក្មេងដែលត្រូវការពារភូមិរបស់គាត់...",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
    },
    {
      id: 10,
      title: "កំណត់ហេតុបុរសម្នាក់",
      titleEn: "Diary of a Man",
      rating: "7.9",
      duration: "១ ម៉ោង ៥៥ នាទី",
      year: "២០២៤",
      category: "មនោសញ្ចេតនា",
      description: "រឿងអំពីជីវិតបុរសម្នាក់ដែលកត់ត្រាកំណត់ហេតុជីវិតរបស់គាត់...",
      cast: "ចាន់ ស៊ីណា, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
    },
    {
      id: 11,
      title: "ផ្ទះខ្មោចទិញ",
      titleEn: "The Haunted House Sale",
      rating: "8.2",
      duration: "១ ម៉ោង ៥០ នាទី",
      year: "២០២៣",
      category: "រន្ធត់",
      description: "គូស្វាមីភរិយាក្រីក្រទិញផ្ទះថោកបំផុតដែលគេគិតថាជាឱកាសល្អ...",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
    },
    {
      id: 12,
      title: "តួឯកជីវិតពិត",
      titleEn: "Real Life Hero",
      rating: "7.5",
      duration: "២ ម៉ោង ០៥ នាទី",
      year: "២០២៤",
      category: "កំប្លែង",
      description: "រឿងអំពីបុរសធម្មតាម្នាក់ដែលត្រូវបានគេច្រឡំជាតួឯក...",
      cast: "បូរិម ឆាយ, ចាន់ ស៊ីណា, ឃីម សុផល",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
    },
    {
      id: 13,
      title: "ភូមិគ្រឹះចម្លែក",
      titleEn: "The Strange Village",
      rating: "8.5",
      duration: "២ ម៉ោង ១៥ នាទី",
      year: "២០២៤",
      category: "ស៊ើបអង្កេត",
      description: "អ្នកស៊ើបអង្កេតត្រូវបានគេផ្ញើទៅស៊ើបអង្កេតភូមិដាច់ស្រយាលមួយ...",
      cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
    },
    // Korean Movies (IDs 14-15)
    {
      id: 14,
      title: "Squid Game",
      titleEn: "Squid Game",
      rating: "8.8",
      duration: "២ ម៉ោង ១០ នាទី",
      year: "២០២៣",
      category: "រន្ធត់",
      description: "ក្រុមមនុស្សដែលមានបំណុលច្រើនត្រូវបានអញ្ជើញឱ្យចូលរួមក្នុងហ្គេម...",
      cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-joon",
      image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 15,
      title: "Parasite",
      titleEn: "Parasite",
      rating: "8.6",
      duration: "២ ម៉ោង ១២ នាទី",
      year: "២០១៩",
      category: "មនោសញ្ចេតនា",
      description: "គ្រួសារក្រីក្រត្រៀមខ្លួនជាអ្នកបម្រើសម្រាប់គ្រួសារមានប្រាក់ជាង...",
      cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
    }
  ];

  // Categories
  const categories = [
    'ទាំងអស់',
    'រន្ធត់',
    'សកម្មភាព',
    'មនោសញ្ចេតនា',
    'វិទ្យាសាស្ត្រ',
    'ស៊ើបអង្កេត',
    'កំប្លែង',
    'រឿងព្រេង'
  ];

  // Filter movies based on search and category
  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ទាំងអស់' || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle movie click
  const handleMovieClick = (movieId) => {
    if (onMovieClick) {
      onMovieClick(movieId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-khmer">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ភាពយន្តទាំងអស់</h1>
          <p className="text-gray-300 text-lg">ស្វែងរកភាពយន្តដែលអ្នកចូលចិត្តពីឃ្លាំងរឿងយើង</p>
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
              placeholder="ស្វែងរកភាពយន្ត..."
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaFilter />
            </div>
            <select
              className="bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-10 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-400">
            បានរកឃើញ <span className="text-red-500 font-bold">{filteredMovies.length}</span> ភាពយន្ត
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">តម្រៀបតាម:</span>
            <select className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600">
              <option>ពេញនិយម</option>
              <option>ថ្មីបំផុត</option>
              <option>ការវាយតម្លៃខ្ពស់</option>
            </select>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">មិនមានភាពយន្ត</h3>
            <p className="text-gray-400">ភាពយន្តដែលអ្នកកំពុងស្វែងរកមិនមាននៅក្នុងប្រព័ន្ធទេ។</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <div 
                key={movie.id} 
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleMovieClick(movie.id)}
              >
                {/* Movie Poster */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <FaPlay /> ទស្សនាព័ត៌មាន
                      </button>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="text-white font-bold text-sm">{movie.rating}</span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg">
                    <span className="text-white font-bold text-sm">{movie.year}</span>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 italic line-clamp-1">
                    {movie.titleEn}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-red-500" size={12} />
                        <span>{movie.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-red-500" size={12} />
                        <span>{movie.year}</span>
                      </div>
                    </div>
                    <span className="bg-red-600/20 text-red-500 text-xs px-2 py-1 rounded">
                      {movie.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-2">
                    {movie.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredMovies.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
              មុន
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
            <div className="text-gray-300">ភាពយន្តសរុប</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-red-500 mb-2">8.4</div>
            <div className="text-gray-300">ការវាយតម្លៃមធ្យម</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-red-500 mb-2">6</div>
            <div className="text-gray-300">ប្រភេទភាពយន្ត</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-red-500 mb-2">2024</div>
            <div className="text-gray-300">ឆ្នាំចុងក្រោយ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;