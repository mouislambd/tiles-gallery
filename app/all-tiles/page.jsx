'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TileCard from '@/components/TileCard';

export default function AllTilesPage() {
    const [tiles, setTiles] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/tiles')
            .then(res => res.json())
            .then(data => {
                setTiles(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filtered = tiles.filter(tile =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ background: '#111827', minHeight: '100vh' }}>
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="mb-10">
                    <p className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: '#C8A96E' }}>Collection</p>
                    <h1 className="text-3xl font-semibold text-white mb-6">All Tiles</h1>
                    <input
                        type="text"
                        placeholder="Search tiles by title..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full px-6 py-4 rounded-full text-white outline-none"
                        style={{ background: '#1F2937', border: '1px solid #374151' }}
                    />
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 border-2 border-gray-700 rounded-full animate-spin"
                            style={{ borderTopColor: '#C8A96E' }}></div>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>loading</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map(tile => (
                            <TileCard key={tile.id} tile={tile} />
                        ))}
                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
}