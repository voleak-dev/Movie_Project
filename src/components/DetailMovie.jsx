import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaPlus, FaStar, FaClock, FaCalendarAlt } from 'react-icons/fa';

const DetailMovie = () => {
  const { id } = useParams();
  
  const getMovieById = (movieId) => {
    const movies = {
      // Trending Movies (IDs 1-5)
      1: {
        title: "រឿង បិសាចក្នុងព្រៃ",
        titleEn: "Ghost in the Jungle",
        rating: "8.5",
        duration: "២ ម៉ោង ១៥ នាទី",
        year: "២០២៤",
        category: "រន្ធត់ / ភេវ",
        description: "រឿងអំពីក្រុមយុវជនដែលធ្វើដំណើរទៅរុករកព្រៃដ៏សែនដាច់ស្រយាល ប៉ុន្តែត្រូវជួបប្រទះអំពើអាថ៌កំបាំងដែលមិនអាចពន្យល់បាន។ ពួកគេត្រូវតែរកវិធីគេចផុតពីព្រៃនិងអ្វីដែលលាក់បាំងនៅក្នុងនោះ។",
        cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, ឃីម សុផល",
        image: "https://m.media-amazon.com/images/I/81xniMPBlAL._AC_UF1000,1000_QL80_.jpg"
      },
      2: {
        title: "អាណាចក្រភពផ្កាយ",
        titleEn: "Star Empire",
        rating: "9.2",
        duration: "៣ ម៉ោង ០៥ នាទី",
        year: "២០២៤",
        category: "វិទ្យាសាស្ត្រ / ភាពយន្ត",
        description: "រឿងអំពីអាណាចក្រអវកាសដ៏ធំធេងដែលកំពុងជួបប្រទះនឹងគ្រោះថ្នាក់ពីសក្តានុពលដែលមិនស្គាល់។ អ្នកជំនាញត្រូវតែស្វែងរកដំណោះស្រាយដើម្បីសង្គ្រោះពិភពលោកទាំងមូល។",
        cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
        image: "https://m.media-amazon.com/images/I/81bzQh-M1DL._AC_UF894,1000_QL80_.jpg"
      },
      3: {
        title: "អ្នកប្រយុទ្ធស្មោះស្នេហ៍",
        titleEn: "The Loyal Fighter",
        rating: "7.8",
        duration: "២ ម៉ោង ០០ នាទី",
        year: "២០២៣",
        category: "មនោសញ្ចេតនា / សកម្មភាព",
        description: "រឿងអំពីអ្នកប្រយុទ្ធដែលត្រូវជ្រើសរើសរវាងកេរ្តិ៍ឈ្មោះគ្រួសារនិងសេចក្តីស្រឡាញ់របស់គាត់។ ក្នុងពេលដែលប្រទេសកំពុងឈរនៅលើគែមនៃសង្គ្រាម។",
        cast: "ម៉ាលីស ផាន់ដា, សុខ សេរី, បូរិម ឆាយ",
        image: "https://m.media-amazon.com/images/M/MV5BMmE5OTc2MTAtZTdhZi00ODQ5LThhOGMtMjVlMWQyODI2ZWRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
      4: {
        title: "បេសកកម្មគ្រោះថ្នាក់",
        titleEn: "Dangerous Mission",
        rating: "8.9",
        duration: "២ ម៉ោង ២០ នាទី",
        year: "២០២៤",
        category: "វាយប្រហារ / សកម្មភាព",
        description: "ក្រុមពិសេសត្រូវចូលទៅក្នុងទឹកដីសត្រូវដើម្បីសង្គ្រោះអ្នកសង្ស័យ។ ពួកគេត្រូវប្រើជំនាញគ្រប់បែបយ៉ាងដើម្បីរស់រានមានជីវិតនិងបំពេញភារកិច្ច។",
        cast: "Tom Cruise, Emily Blunt, Henry Cavill",
        image: "https://cdn.cinematerial.com/p/297x/osu2gdkh/tom-and-jerry-movie-poster-md.jpg?v=1614079055"
      },
      5: {
        title: "អាថ៌កំបាំងកោះងងឹត",
        titleEn: "Dark Island Secrets",
        rating: "8.1",
        duration: "១ ម៉ោង ៥០ នាទី",
        year: "២០២៣",
        category: "ស៊ើបអង្កេត / រន្ធត់",
        description: "អ្នកស្រាវជ្រាវត្រូវចូលទៅស៊ើបអង្កេតកោះដែលមិនមាននរណាម្នាក់អាចរស់រានជាសុខសប្បាយ។ អាថ៌កំបាំងដ៏គួរឱ្យភ័យខ្លាចកំពុងរង់ចាំពួកគេ។",
        cast: "សុខ សេរី, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
        image: "https://upload.wikimedia.org/wikipedia/en/6/60/Tom_and_Jerry_Blast_Off_to_Mars_cover.jpg"
      },
      // New Movies (IDs 6-8)
      6: {
        title: "គ្រួសារអ្នកប្រយុទ្ធ",
        titleEn: "The Fighter Family",
        rating: "8.5",
        duration: "២ ម៉ោង ១៥ នាទី",
        year: "២០២៤",
        category: "សកម្មភាព / គ្រួសារ",
        description: "រឿងអំពីគ្រួសារដែលមានប្រពៃណីប្រយុទ្ធតាំងពីជំនាន់មួយទៅជំនាន់មួយ។ បុត្រីច្បងត្រូវតែការពារកេរ្តិ៍ឈ្មោះគ្រួសារនិងដឹកនាំបងប្អូនរបស់នាងក្នុងការប្រកួតប្រជែងជាតិ។",
        cast: "ម៉ាលីស ផាន់ដា, គឹម សុផល, ចាន់ ស៊ីណា",
        image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/fighting-with-my-family-2019.jpg"
      },
      7: {
        title: "អាថ៌កំបាំងក្រុងបុរាណ",
        titleEn: "Ancient City Secrets",
        rating: "8.2",
        duration: "១ ម៉ោង ៤៥ នាទី",
        year: "២០២៤",
        category: "រន្ធត់ / ស៊ើបអង្កេត",
        description: "ក្រុមអ្នកស្រាវជ្រាវត្រូវជួបប្រទះនឹងអាថ៌កំបាំងដ៏គួរឱ្យរន្ធត់នៅក្នុងក្រុងបុរាណដែលបានបាត់ខ្លួន។ ពួកគេត្រូវដោះស្រាយអាថ៌កំបាំងដែលមិនអាចពន្យល់បានមុនពេលវាយកជីវិតពួកគេ។",
        cast: "សុខ សេរី, ឃីម សុផល, បូរិម ផាន់ដា",
        image: "https://i.ytimg.com/vi/GQsiDLqKb5Y/maxresdefault.jpg"
      },
      8: {
        title: "យុទ្ធសាស្ត្រមេឃខ្មៅ",
        titleEn: "Black Sky Tactics",
        rating: "8.7",
        duration: "១ ម៉ោង ៥៨ នាទី",
        year: "២០២៤",
        category: "សកម្មភាព / យុទ្ធសាស្ត្រ",
        description: "ក្រុមអាវកាសយានិកឈ្នះត្រូវតែដោះស្រាយជាមួយនឹងការបះបោរនៅលើស្ថានីយ៍អវកាស។ ពួកគេត្រូវប្រើយុទ្ធសាស្ត្រដ៏ឆ្លាតវៃដើម្បីទប់ទល់នឹងសត្រូវដែលចេះវិធីសាស្រ្តអាវកាស។",
        cast: "Tom Cruise, Emily Blunt, John Krasinski",
        image: "https://i.ytimg.com/vi/aATJpu37U6g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuQ4UQ5K7_V5gd8S6mSBmu8IvU2g"
      },
      // Khmer Movies (IDs 9-13 - Actual Khmer movies)
      9: {
        title: "នេសាទក្រពើ",
        titleEn: "Crocodile Hunter",
        rating: "8.8",
        duration: "២ ម៉ោង ១០ នាទី",
        year: "២០២៣",
        category: "រឿងព្រេង / សកម្មភាព",
        description: "រឿងអំពីអ្នកនេសាទក្រពើក្មេងដែលត្រូវការពារភូមិរបស់គាត់ពីក្រុមអ្នកលក់ខុសច្បាប់។ គាត់ត្រូវប្រើចំណេះដឹងពីក្រពើនិងជំនាញនេសាទដើម្បីការពារអ្នកភូមិ។",
        cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
        image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
      },
      10: {
        title: "កំណត់ហេតុបុរសម្នាក់",
        titleEn: "Diary of a Man",
        rating: "7.9",
        duration: "១ ម៉ោង ៥៥ នាទី",
        year: "២០២៤",
        category: "មនោសញ្ចេតនា / រឿងពិត",
        description: "រឿងអំពីជីវិតបុរសម្នាក់ដែលកត់ត្រាកំណត់ហេតុជីវិតរបស់គាត់អស់រយៈពេល ២០ឆ្នាំ។ រឿងនិទានអំពីស្នេហា ការបាត់បង់ និងការស្វែងរកអត្ថន័យជីវិត។",
        cast: "ចាន់ ស៊ីណា, ឃីម សុផល, ម៉ាលីស ផាន់ដា",
        image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
      },
      11: {
        title: "ផ្ទះខ្មោចទិញ",
        titleEn: "The Haunted House Sale",
        rating: "8.2",
        duration: "១ ម៉ោង ៥០ នាទី",
        year: "២០២៣",
        category: "រន្ធត់ / ភេវ",
        description: "គូស្វាមីភរិយាក្រីក្រទិញផ្ទះថោកបំផុតដែលគេគិតថាជាឱកាសល្អ ប៉ុន្តែពួកគេមិនដឹងថាផ្ទះនោះមានអតីតកាលដ៏គួរឱ្យរន្ធត់។ ពួកគេត្រូវស្វែងរកការពិតនិងដោះស្រាយអាថ៌កំបាំង។",
        cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
        image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
      },
      12: {
        title: "តួឯកជីវិតពិត",
        titleEn: "Real Life Hero",
        rating: "7.5",
        duration: "២ ម៉ោង ០៥ នាទី",
        year: "២០២៤",
        category: "កំប្លែង / មនោសញ្ចេតនា",
        description: "រឿងអំពីបុរសធម្មតាម្នាក់ដែលត្រូវបានគេច្រឡំជាតួឯកខ្សែភាពយន្តល្បី។ ជីវិតរបស់គាត់ត្រឡប់ពិតប្រាកដពេលដែលគាត់ត្រូវធ្វើតួឯកក្នុងជីវិតពិត។",
        cast: "បូរិម ឆាយ, ចាន់ ស៊ីណា, ឃីម សុផល",
        image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
      },
      13: {
        title: "ភូមិគ្រឹះចម្លែក",
        titleEn: "The Strange Village",
        rating: "8.5",
        duration: "២ ម៉ោង ១៥ នាទី",
        year: "២០២៤",
        category: "ស៊ើបអង្កេត / អាថ៌កំបាំង",
        description: "អ្នកស៊ើបអង្កេតត្រូវបានគេផ្ញើទៅស៊ើបអង្កេតភូមិដាច់ស្រយាលមួយដែលមានព្រឹត្តិការណ៍ចម្លែកៗកើតឡើង។ អាថ៌កំបាំងដ៏ជ្រាលជ្រៅកំពុងរង់ចាំការរកឃើញ។",
        cast: "សុខ សេរី, ម៉ាលីស ផាន់ដា, បូរិម ឆាយ",
        image: "https://books.scholarlibrary.com/web/image/product.template/18102/image_1024?unique=4397a7c"
      },
      // Korean Movies (IDs 14-18)
      // Korean Movies (IDs 14-18)
    14: {
      title: "រឿង បេសកកម្មសម្ងាត់",
      titleEn: "Secret Mission",
      rating: "8.9",
      duration: "២ ម៉ោង ០៥ នាទី",
      year: "២០២៤",
      category: "វាយប្រហារ / សកម្មភាព",
      description: "រឿងរ៉ាវរបស់អ្នកស៊ើបការណ៍សម្ងាត់ដែលត្រូវជ្រៀតចូលក្នុងក្រុមក្មេងទំនើង ដើម្បីបង្ក្រាបអំពើពុករលួយដ៏ធំមួយនៅក្នុងទីក្រុងសេអ៊ូល។",
      cast: "Hyun Bin, Yoo Hae-jin",
      image: "https://khdiamond.net/wp-content/uploads/2024/07/POSTER-scaled.jpg"
        },
        15: {
        title: "ស្នេហ៍ក្នុងសុបិន",
        titleEn: "Dream Love",
        rating: "9.2",
        duration: "១ ម៉ោង ៤៥ នាទី",
        year: "២០២៤",
        category: "មនោសញ្ចេតនា",
        description: "រឿងរ៉ាវស្នេហាដ៏ផ្អែមល្ហែមរវាងយុវជនពីរនាក់ដែលបានជួបគ្នាតាមរយៈការយល់សប្តិ និងព្យាយាមស្វែងរកគ្នានៅក្នុងជីវិតពិត។",
        cast: "Park Bo-gum, Suzy",
        image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg"
      },
      16: {
        title: "វិញ្ញាណមិនស្លាប់",
        titleEn: "Immortal Spirit",
        rating: "8.5",
        duration: "២ ម៉ោង ១០ នាទី",
        year: "២០២៣",
        category: "រន្ធត់ / អាថ៌កំបាំង",
        description: "វិញ្ញាណបុរាណមួយដែលតាមថែរក្សាគ្រួសារមួយអស់រយៈពេលរាប់រយឆ្នាំ ប៉ុន្តែត្រូវប្រឈមមុខនឹងគ្រូមន្តអាគមខ្មៅងងឹត។",
        cast: "Gong Yoo, Kim Go-eun",
        image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg"
      },
      17: {
        title: "អ្នកស៊ើបអង្កេតវ័យក្មេង",
        titleEn: "Young Detective",
        rating: "7.8",
        duration: "១ ម៉ោង ៥៥ នាទី",
        year: "២០២៤",
        category: "ស៊ើបអង្កេត / កំប្លែង",
        description: "និស្សិតសាលាប៉ូលីសពីរនាក់បានឃើញការចាប់ជំរិតមួយ និងបានសម្រេចចិត្តបើកការស៊ើបអង្កេតដោយខ្លួនឯង។",
        cast: "Park Seo-joon, Kang Ha-neul",
        image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg"
      },
      18: {
        title: "មហិច្ឆតាអំណាច",
        titleEn: "Ambition of Power",
        rating: "8.7",
        duration: "២ ម៉ោង ០៥ នាទី",
        year: "២០២៤",
        category: "នយោបាយ / រឿងពិត",
        description: "ការតស៊ូដណ្តើមអំណាចនៅក្នុងស្ថាប័នរដ្ឋដ៏ធំមួយ ដែលបង្ហាញពីការប្រើល្បិចកល និងការក្បត់ដើម្បីឡើងទៅកាន់តំណែងខ្ពស់បំផុត។",
        cast: "Lee Jung-jae, Jung Woo-sung",
        image: "https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqPt6wkaPN23C3gEpJbmje6O2cMYXR4q9Cpvl_loBQ4Flrl5UinOkV-Fv8jw3rrRM6pHlQ3V5OdSEyCupzEbcJbm-RFqf_Ta9udkhMjAyEThEK6f7ATjQOltKkeRsz8ZnAxy9JZMQir5KSHWHy0UbiDI3yBlJHeUDdEm1eE51pySo7bmgMmqknelmC3NBD/s1600/Krom%20Brotebatka%20Songkrous%20Chivit.jpg"
      },

        19: {
      title: "រឿង ទេពបុត្រដាវទិព្វ",
      titleEn: "The Sword Deity",
      rating: "8.5",
      duration: "២ ម៉ោង ១៥ នាទី",
      year: "២០២៤",
      category: "វាយប្រហារ / បុរាណ",
      description: "រឿងរ៉ាវរបស់យុវជនម្នាក់ដែលទទួលបានដាវទិព្វពីបុព្វបុរស និងត្រូវការពារពិភពគុនពីការលុកលុយរបស់បិសាច។",
      cast: "Xiao Zhan, Wang Yibo",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg"
    },
    20: {
      title: "អាថ៌កំបាំងក្រុងហាមឃាត់",
      titleEn: "Hidden City Secrets",
      rating: "9.0",
      duration: "២ ម៉ោង ៤៥ នាទី",
      year: "២០២៤",
      category: "ប្រវត្តិសាស្ត្រ / ស៊ើបអង្កេត",
      description: "ការស៊ើបអង្កេតអំពីករណីឃាតកម្មអាថ៌កំបាំងនៅក្នុងរាជវាំងដែលពាក់ព័ន្ធនឹងមន្ត្រីជាន់ខ្ពស់ជាច្រើន។",
      cast: "Chen Kun, Ni Ni",
      image: "https://i.mydramalist.com/PxmBER_4f.jpg"
      },
      21: {
      title: "យុទ្ធសាស្ត្រស៊ុនអ៊ូខុង",
      titleEn: "The Great Wall",
      rating: "7.8",
      duration: "២ ម៉ោង ១១ នាទី",
      year: "២០១៩",
      category: "ទេវកថា / ប្រវត្តិសាស្ត្រ",
      },
      
  };
      
      return movies[movieId] || {
        title: "រឿងមិនត្រូវបានរកឃើញ",
        titleEn: "Movie Not Found",
        rating: "0.0",
        duration: "០ ម៉ោង ០០ នាទី",
        year: "២០២៤",
        category: "មិនស្គាល់",
        description: "រឿងនេះមិនមាននៅក្នុងប្រព័ន្ធទេ។",
        cast: "មិនស្គាល់",
        image: "https://via.placeholder.com/400x600/333333/FFFFFF?text=Movie+Not+Found"
      };
  };

  const movie = getMovieById(parseInt(id));

  return (
    <section className="relative min-h-screen bg-gray-950 text-white font-khmer overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={movie.image} 
          className="w-full h-full object-cover opacity-30 blur-sm" 
          alt="backdrop" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          
          <div className="w-64 md:w-80 flex-shrink-0 shadow-2xl shadow-red-900/20 rounded-2xl overflow-hidden border border-white/10">
            <img src={movie.image} alt={movie.title} className="w-full h-auto" />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-2">{movie.title}</h1>
              <p className="text-gray-400 text-xl italic">{movie.titleEn}</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <div className="flex items-center text-yellow-500">
                <FaStar className="mr-2" />
                <span className="font-bold">{movie.rating} / ១០</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaClock className="mr-2 text-red-600" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaCalendarAlt className="mr-2 text-red-600" />
                <span>{movie.year}</span>
              </div>
              <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-md border border-red-600/30">
                {movie.category}
              </span>
            </div>

            <div className="max-w-3xl">
              <h3 className="text-xl font-bold mb-3 border-b border-red-600 w-fit pb-1">សង្ខេបរឿង</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.description}
              </p>
            </div>

            <p className="text-gray-400">
              <span className="text-white font-bold">តួសម្តែង៖</span> {movie.cast}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-red-600/30">
                <FaPlay className="mr-3" /> ទស្សនាឥឡូវនេះ
              </button>
              <button className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all">
                <FaPlus className="mr-3" /> បន្ថែមក្នុងបញ្ជី
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;