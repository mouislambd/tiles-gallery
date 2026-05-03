// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import TileCard from '@/components/TileCard';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function HomePage() {
//   const [tiles, setTiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/tiles')
//       .then(res => res.json())
//       .then(data => {
//         setTiles(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const marqueeText = '✦ New Arrivals: Ceramic Blue Tile · Weekly Feature: Modern Geometric · Join the Community · Premium Marble Collection · ';

//   return (
//     <div style={{ background: '#111827', minHeight: '100vh' }}>
//       <Navbar />

//       <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
//         <span className="text-xs uppercase tracking-widest mb-4 font-medium"
//           style={{ color: '#C8A96E' }}>
//           Tile Gallery
//         </span>
//         <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-white">
//           Discover Your <br />
//           <span style={{ color: '#C8A96E' }}>Perfect Aesthetic</span>
//         </h1>
//         <p className="text-base mb-10 max-w-md text-gray-400">
//           Premium ceramic, marble & mosaic tiles for every space — curated with design in mind.
//         </p>
//         <Link href="/all-tiles"
//           className="px-8 py-3 rounded-lg font-semibold text-sm"
//           style={{ background: '#C8A96E', color: '#111827' }}>
//           Browse Now →
//         </Link>
//       </section>

//       <div className="overflow-hidden py-3" style={{ background: '#C8A96E' }}>
//         <div className="marquee-inner">
//           {[...Array(4)].map((_, i) => (
//             <span key={i} className="text-sm font-medium px-8"
//               style={{ color: '#111827' }}>
//               {marqueeText}
//             </span>
//           ))}
//         </div>
//       </div>

//       <section className="max-w-6xl mx-auto px-6 py-20">
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <p className="text-xs uppercase tracking-widest mb-1"
//               style={{ color: '#C8A96E' }}>Handpicked</p>
//             <h2 className="text-2xl font-semibold text-white">Featured Tiles</h2>
//           </div>
//           <Link href="/all-tiles" className="text-sm"
//             style={{ color: '#C8A96E' }}>
//             View All →
//           </Link>
//         </div>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <div className="w-8 h-8 border-2 border-gray-700 rounded-full animate-spin"
//               style={{ borderTopColor: '#C8A96E' }}></div>
//           </div>
//         ) : tiles.length === 0 ? (
//           <div className="text-center py-20 text-gray-500">
//             <p>কোনো tile পাওয়া যায়নি</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {tiles.map((tile) => (
//               <TileCard key={tile.id} tile={tile} />
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }






'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TileCard from '@/components/TileCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomePage() {
  const [tiles, setTiles] = useState<{ id: string;[key: string]: any }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tiles')
      .then(res => res.json())
      .then(data => {
        setTiles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const marqueeText = '✦ New Arrivals: Ceramic Blue Tile · Weekly Feature: Modern Geometric · Join the Community · Premium Marble Collection · ';

  return (
    <div style={{ background: '#111827', minHeight: '100vh' }}>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-widest mb-4 font-medium"
          style={{ color: '#C8A96E' }}>
          Tile Gallery
        </span>
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-white">
          Discover Your <br />
          <span style={{ color: '#C8A96E' }}>Perfect Aesthetic</span>
        </h1>
        <p className="text-base mb-10 max-w-md text-gray-400">
          Premium ceramic, marble & mosaic tiles for every space — curated with design in mind.
        </p>
        <Link href="/all-tiles"
          className="px-8 py-3 rounded-lg font-semibold text-sm"
          style={{ background: '#C8A96E', color: '#111827' }}>
          Browse Now →
        </Link>
      </section>

      <div className="overflow-hidden py-3" style={{ background: '#C8A96E' }}>
        <div className="marquee-inner">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-medium px-8"
              style={{ color: '#111827' }}>
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1"
              style={{ color: '#C8A96E' }}>Handpicked</p>
            <h2 className="text-2xl font-semibold text-white">Featured Tiles</h2>
          </div>
          <Link href="/all-tiles" className="text-sm"
            style={{ color: '#C8A96E' }}>
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-gray-700 rounded-full animate-spin"
              style={{ borderTopColor: '#C8A96E' }}></div>
          </div>
        ) : tiles.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p> tile </p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {tiles.map((tile) => (
              <SwiperSlide key={tile.id}>
                <TileCard tile={tile} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      <Footer />
    </div>
  );
}

