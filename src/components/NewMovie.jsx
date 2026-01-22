import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NewMovie = () => {
  const navigate = useNavigate(); // Initialize navigate function
  
  const newReleases = [
    {
      id: 6,
      title: "គ្រួសារអ្នកប្រយុទ្ធ",
      titleEn: "The Fighter Family",
      image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/fighting-with-my-family-2019.jpg",
      date: "ចេញថ្មីថ្ងៃនេះ",
      duration: "២ ម៉ោង ១៥ នាទី"
    },
    {
      id: 7,
      title: "អាថ៌កំបាំងក្រុងបុរាណ",
      titleEn: "Ancient City Secrets",
      image: "https://i.ytimg.com/vi/GQsiDLqKb5Y/maxresdefault.jpg",
      date: "ម្សិលមិញ",
      duration: "១ ម៉ោង ៤៥ នាទី"
    },
    {
      id: 8,
      title: "យុទ្ធសាស្ត្រមេឃខ្មៅ",
      titleEn: "Black Sky Tactics",
      image: "https://i.ytimg.com/vi/aATJpu37U6g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuQ4UQ5K7_V5gd8S6mSBmu8IvU2g",
      date: "២ ថ្ងៃមុន",
      duration: "១ ម៉ោង ៥៨ នាទី"
    }
  ];

  // Function to handle movie click
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to detail page with movie ID
  };

  return (
    <section className="bg-gray-950 py-12 font-khmer border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            ភាពយន្តចេញថ្មីៗ
          </h2>
        </div>

        {/* Horizontal Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newReleases.map((movie) => (
            <div 
              key={movie.id} 
              className="group cursor-pointer"
              onClick={() => handleMovieClick(movie.id)} // Add onClick handler here
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-red-900/20">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* New Tag */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  NEW
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white">
                    <svg 
                      className="w-8 h-8 ml-1" 
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

              {/* Text Details */}
              <div className="mt-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-white text-xl font-bold group-hover:text-red-500 transition-colors">
                    {movie.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-3 italic">{movie.titleEn}</p>
                
                <div className="flex items-center text-xs font-medium text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {movie.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {movie.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default NewMovie;