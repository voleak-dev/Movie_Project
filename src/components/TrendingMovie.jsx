import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingMovie = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const trendingMovies = [
    {
      id: 1,
      title: "រឿង បិសាចក្នុងព្រៃ",
      rating: "8.5",
      year: "2024",
      image: "https://m.media-amazon.com/images/I/81xniMPBlAL._AC_UF1000,1000_QL80_.jpg",
      category: "រន្ធត់"
    },
    {
      id: 2,
      title: "អាណាចក្រភពផ្កាយ",
      rating: "9.2",
      year: "2024",
      image: "https://m.media-amazon.com/images/I/81bzQh-M1DL._AC_UF894,1000_QL80_.jpg",
      category: "វិទ្យាសាស្ត្រ"
    },
    {
      id: 3,
      title: "អ្នកប្រយុទ្ធស្មោះស្នេហ៍",
      rating: "7.8",
      year: "2023",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5OTc2MTAtZTdhZi00ODQ5LThhOGMtMjVlMWQyODI2ZWRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      category: "មនោសញ្ចេតនា"
    },
    {
      id: 4,
      title: "បេសកកម្មគ្រោះថ្នាក់",
      rating: "8.9",
      year: "2024",
      image: "https://cdn.cinematerial.com/p/297x/osu2gdkh/tom-and-jerry-movie-poster-md.jpg?v=1614079055",
      category: "វាយប្រហារ"
    },
    {
      id: 5,
      title: "អាថ៌កំបាំងកោះងងឹត",
      rating: "8.1",
      year: "2023",
      image: "https://upload.wikimedia.org/wikipedia/en/6/60/Tom_and_Jerry_Blast_Off_to_Mars_cover.jpg",
      category: "ស៊ើបអង្កេត"
    }
  ];

  // Function to handle movie click
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="bg-gray-950 py-12 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-8 bg-red-600 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
              ភាពយន្តកំពុងពេញនិយម
            </h2>
          </div>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors">
            មើលទាំងអស់ &rarr;
          </a>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {trendingMovies.map((movie) => (
            <div 
              key={movie.id} 
              className="group relative cursor-pointer"
              onClick={() => handleMovieClick(movie.id)} // Add click handler
            >
              {/* Poster Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <button 
                    className="bg-red-600 text-white text-xs font-bold py-2 rounded-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      handleMovieClick(movie.id);
                    }}
                  >
                    ទស្សនាឥឡូវនេះ
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center space-x-1 border border-white/10">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-white text-[10px] font-bold">{movie.rating}</span>
                </div>
              </div>

              {/* Movie Info */}
              <div className="mt-3 space-y-1">
                <h3 className="text-white font-semibold text-sm md:text-base line-clamp-1 group-hover:text-red-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-500 space-x-2">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingMovie;