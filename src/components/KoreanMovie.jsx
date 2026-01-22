import React from 'react';
import { Link } from 'react-router-dom'; // ១. Import Link

const KoreanMovie = () => {
  const kMovies = [
    {
      id: 1,
      title: "រឿង បេសកកម្មសម្ងាត់",
      rating: "8.9",
      image: "https://khdiamond.net/wp-content/uploads/2024/07/POSTER-scaled.jpg",
      quality: "FHD",
      category: "វាយប្រហារ"
    },
    {
      id: 2,
      title: "ស្នេហ៍ក្នុងសុបិន",
      rating: "9.2",
      image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg?w=348&resize=348,215&ssl=1",
      quality: "HD",
      category: "មនោសញ្ចេតនា"
    },
    {
      id: 3,
      title: "វិញ្ញាណមិនស្លាប់",
      rating: "8.5",
      image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg?w=348&resize=348,215&ssl=1",
      quality: "FHD",
      category: "រន្ធត់"
    },
    {
      id: 4,
      title: "អ្នកស៊ើបអង្កេតវ័យក្មេង",
      rating: "7.8",
      image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg?w=348&resize=348,215&ssl=1",
      quality: "HD",
      category: "ស៊ើបអង្កេត"
    },
    {
      id: 5,
      title: "មហិច្ឆតាអំណាច",
      rating: "8.7",
      image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg?w=348&resize=348,215&ssl=1",
      quality: "4K",
      category: "នយោបាយ"
    }
  ];

  return (
    <section className="bg-gray-950 py-16 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-blue-500 pl-4 uppercase tracking-wider">
              ភាពយន្តកូរ៉េពេញនិយម
            </h2>
          </div>
          {/* ២. ប្តូរទៅជា Link */}
          <Link to="/korean-movies" className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors">
            មើលទាំងអស់ &rarr;
          </Link>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {kMovies.map((movie) => (
            /* ៣. ប្រើ Link រុំ Card ទាំងមូលដើម្បីងាយស្រួលចុច */
            <Link to={`/movie/${movie.id}`} key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5 transition-all duration-300 group-hover:border-blue-500/50">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow-md">
                  K-SERIES
                </div>

                <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] text-white border border-white/10">
                  <span className="text-yellow-400 mr-1">★</span> {movie.rating}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <svg className="w-6 h-6 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-gray-200 font-medium text-sm md:text-base line-clamp-1 group-hover:text-blue-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-500 space-x-2">
                  <span className="text-blue-600 font-bold">{movie.quality}</span>
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

export default KoreanMovie;