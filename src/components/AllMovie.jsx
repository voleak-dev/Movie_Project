import React, { useState } from 'react';

const AllMovie = () => {
  const [activeCategory, setActiveCategory] = useState("ទាំងអស់");

  const categories = ["ទាំងអស់", "វាយប្រហារ", "រន្ធត់", "កំប្លែង", "មនោសញ្ចេតនា", "តុក្កតា"];

  const movies = [
    { id: 1, title: "តីតានីក", rating: "9.0", image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg", quality: "HD" },
    { id: 2, title: "ភពស្វា", rating: "8.4", image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg", quality: "4K" },
    { id: 3, title: "អ្នកយាមទ្វារ", rating: "7.5", image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg", quality: "HD" },
    { id: 4, title: "បេសកកម្មចុងក្រោយ", rating: "8.1", image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg", quality: "4K" },
    { id: 5, title: "វិញ្ញាណខ្មោច", rating: "6.9", image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg", quality: "HD" },
    { id: 6, title: "សង្គ្រាមផ្កាយ", rating: "9.5", image: "https://w0.peakpx.com/wallpaper/137/523/HD-wallpaper-shinchan-anime-cartoon.jpg", quality: "4K" },
    { id: 7, title: "រាជបុត្រនាគ", rating: "8.0", image: "https://w0.peakpx.com/wallpaper/137/523/HD-wallpaper-shinchan-anime-cartoon.jpg", quality: "HD" },
    { id: 8, title: "អ្នកប្រមាញ់បិសាច", rating: "7.2", image: "https://w0.peakpx.com/wallpaper/137/523/HD-wallpaper-shinchan-anime-cartoon.jpg", quality: "HD" },
    { id: 7, title: "រាជបុត្រនាគ", rating: "8.0", image: "https://w0.peakpx.com/wallpaper/137/523/HD-wallpaper-shinchan-anime-cartoon.jpg", quality: "HD" },
    { id: 8, title: "អ្នកប្រមាញ់បិសាច", rating: "7.2", image: "https://w0.peakpx.com/wallpaper/137/523/HD-wallpaper-shinchan-anime-cartoon.jpg", quality: "HD" },
  ];

  return (
    <section className="bg-gray-950 py-16 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-red-600 pl-4 uppercase tracking-wider">
              ភាពយន្តទាំងអស់
            </h2>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {movies.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Quality Badge */}
                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                  {movie.quality}
                </div>

                {/* Star Rating Overlay */}
                <div className="absolute top-2 right-2 flex items-center bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] text-white">
                  <span className="text-yellow-400 mr-1">★</span> {movie.rating}
                </div>

                {/* Glass Effect Play Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Movie Title */}
              <h3 className="text-gray-200 font-medium text-sm md:text-base line-clamp-1 group-hover:text-red-500 transition-colors">
                {movie.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center space-x-2 bg-transparent border-2 border-gray-800 hover:border-red-600 px-10 py-3 rounded-full text-gray-400 hover:text-white font-bold transition-all duration-300 group">
            <span>បង្ហាញបន្ថែម</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AllMovie;