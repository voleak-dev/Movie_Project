import React from 'react';
import { Link } from 'react-router-dom'; // ១. Import Link ពី react-router-dom

const ChineseMovie = () => {
  const cMovies = [
    {
      id: 1,
      title: "រឿង ទេពបុត្រដាវទិព្វ",
      rating: "8.5",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg",
      quality: "FHD",
      category: "វាយប្រហារ"
    },
    {
      id: 2,
      title: "អាថ៌កំបាំងក្រុងហាមឃាត់",
      rating: "9.0",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg",
      quality: "4K",
      category: "ប្រវត្តិសាស្ត្រ"
    },
    {
      id: 3,
      title: "យុទ្ធសាស្ត្រស៊ុនអ៊ូខុង",
      rating: "7.8",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg",
      quality: "FHD",
      category: "ទេវកថា"
    },
    {
      id: 4,
      title: "កំពូលអ្នកប្រដាល់ចិន",
      rating: "8.2",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg",
      quality: "HD",
      category: "ក្បាច់គុន"
    },
    {
      id: 5,
      title: "សង្គ្រាមបីទ័ព",
      rating: "9.4",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg",
      quality: "4K",
      category: "សង្គ្រាម"
    }
  ];

  return (
    <section className="bg-gray-950 py-16 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider">
              ភាពយន្តចិនល្បីៗ
            </h2>
          </div>
          {/* ២. ប្តូរពី <a> មកប្រើ <Link> និងដាក់ path ទៅកាន់ទំព័ររឿងចិន (ឧទាហរណ៍ /chinese-movies) */}
          <Link to="/chinese-movies" className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors">
            មើលទាំងអស់ &rarr;
          </Link>
        </div>

        {/* ប្លង់ Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {cMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5 transition-all duration-300 group-hover:border-orange-500/50">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-2 left-2 bg-orange-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow-md">
                  C-DRAMA
                </div>

                <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] text-white border border-white/10">
                  <span className="text-yellow-400 mr-1">★</span> {movie.rating}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <svg className="w-6 h-6 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-gray-200 font-medium text-sm md:text-base line-clamp-1 group-hover:text-orange-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-500 space-x-2">
                  <span className="text-orange-600 font-bold">{movie.quality}</span>
                  <span>•</span>
                  <span>{movie.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChineseMovie;