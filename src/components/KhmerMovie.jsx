import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const KhmerMovie = () => {
  const navigate = useNavigate(); // Initialize navigate function
  
  const localMovies = [
    {
      id: 9, // Changed to 9 to avoid conflicts with TrendingMovie IDs
      title: "នេសាទក្រពើ",
      rating: "8.8",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c",
      quality: "FHD",
      category: "រឿងព្រេង"
    },
    {
      id: 10, // Changed to 10
      title: "កំណត់ហេតុបុរសម្នាក់",
      rating: "7.9",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c",
      quality: "HD",
      category: "មនោសញ្ចេតនា"
    },
    {
      id: 11, // Changed to 11
      title: "ផ្ទះខ្មោចទិញ",
      rating: "8.2",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c",
      quality: "FHD",
      category: "រន្ធត់"
    },
    {
      id: 12, // Changed to 12
      title: "តួឯកជីវិតពិត",
      rating: "7.5",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c",
      quality: "HD",
      category: "កំប្លែង"
    },
    {
      id: 13, // Changed to 13
      title: "ភូមិគ្រឹះចម្លែក",
      rating: "8.5",
      image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c",
      quality: "FHD",
      category: "ស៊ើបអង្កេត"
    }
  ];

  // Function to handle movie click
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to detail page with movie ID
  };

  return (
    <section className="bg-gray-950 py-16 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Styled like AllMovie */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-yellow-500 pl-4 uppercase tracking-wider">
              ភាពយន្តខ្មែរពេញនិយម
            </h2>
          </div>
          <a href="#" className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors">
            មើលទាំងអស់ &rarr;
          </a>
        </div>

        {/* Movie Grid - Identical to AllMovie Structure */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {localMovies.map((movie) => (
            <div 
              key={movie.id} 
              className="group cursor-pointer"
              onClick={() => handleMovieClick(movie.id)} // Add onClick handler here
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5 transition-all duration-300 group-hover:border-yellow-500/50">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Khmer Original / Quality Badge */}
                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow-md">
                  ស្នាដៃខ្មែរ
                </div>

                {/* Star Rating Overlay */}
                <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] text-white border border-white/10">
                  <span className="text-yellow-400 mr-1">★</span> {movie.rating}
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <svg 
                      className="w-6 h-6 text-yellow-500 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering parent click
                        handleMovieClick(movie.id);
                      }}
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Movie Title & Info */}
              <div className="space-y-1">
                <h3 className="text-gray-200 font-medium text-sm md:text-base line-clamp-1 group-hover:text-yellow-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-500 space-x-2">
                  <span className="text-yellow-600/80 font-bold">{movie.quality}</span>
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

export default KhmerMovie;