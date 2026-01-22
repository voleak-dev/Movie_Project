import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const movies = [
    {
      title: "ថម និង ជើរី",
      titleEn: "Tom and Jerry (2025 American film)",
      description: "រឿងរ៉ាវ Tom and Jeerry ",
      image: "https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg",
      tags: ["វាយប្រហារ", "ផ្សងព្រេង", "Sci-Fi"]
    },
    {
      title: "អ្នកប្រយុទ្ធក្នុងស្រមោល",
      titleEn: "John Wick: Chapter 4",
      description: "ការប្រយុទ្ធដ៏ស្វិតស្វាញបំផុតរបស់ John Wick ដើម្បីដណ្តើមយកសេរីភាពរបស់គាត់មកវិញពីក្រុម High Table។",
      image: "https://i.ytimg.com/vi/yjRHZEUamCc/maxresdefault.jpg",
      tags: ["វាយប្រហារ", "រំភើប"]
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [movies.length]);

  return (
    <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden bg-black font-khmer">
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl space-y-6">
              {/* Badges */}
              <div className="flex space-x-2">
                {movie.tags.map((tag, i) => (
                  <span key={i} className="bg-red-600/20 text-red-500 border border-red-600/50 px-3 py-1 rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {movie.title}
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light italic -mt-4">
                {movie.titleEn}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-lg max-w-lg line-clamp-3">
                {movie.description}
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold flex items-center transition-all transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  ទស្សនាឥឡូវនេះ
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold transition-all">
                  ព័ត៌មានបន្ថែម
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 flex space-x-3">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 transition-all duration-300 rounded-full ${
              i === currentSlide ? "w-8 bg-red-600" : "w-4 bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;