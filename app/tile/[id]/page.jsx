'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function TileDetailPage() {
    const { id } = useParams();
    const [tile, setTile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/tiles/' + id)
            .then(res => res.json())
            .then(data => {
                setTile(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div style={{ background: '#111827', minHeight: '100vh' }}>
                <Navbar />
                <div className="flex justify-center py-40">
                    <div className="w-8 h-8 border-2 border-gray-700 rounded-full animate-spin"
                        style={{ borderTopColor: '#C8A96E' }}></div>
                </div>
            </div>
        );
    }

    if (!tile) {
        return (
            <div style={{ background: '#111827', minHeight: '100vh' }}>
                <Navbar />
                <div className="text-center py-40 text-gray-500">
                    <p>Tile পাওয়া যায়নি</p>
                    <Link href="/all-tiles" className="mt-4 inline-block"
                        style={{ color: '#C8A96E' }}>← Back to All Tiles</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ background: '#111827', minHeight: '100vh' }}>
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-12">

                <Link href="/all-tiles" className="text-sm mb-8 inline-block"
                    style={{ color: '#C8A96E' }}>
                    ← Back to All Tiles
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Info */}
                    <div>
                        <span className="text-xs uppercase tracking-wider"
                            style={{ color: '#C8A96E' }}>{tile.category}</span>

                        <h1 className="text-3xl font-semibold text-white mt-2 mb-2">{tile.title}</h1>

                        <p className="text-2xl font-semibold mb-6" style={{ color: '#C8A96E' }}>
                            ${tile.price} <span className="text-sm text-gray-500">/ piece</span>
                        </p>

                        <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                            <span className="text-gray-400">Material</span>
                            <span className="text-white">{tile.material}</span>
                        </div>
                        <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                            <span className="text-gray-400">Dimensions</span>
                            <span className="text-white">{tile.dimensions}</span>
                        </div>
                        <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                            <span className="text-gray-400">Creator</span>
                            <span className="text-white">{tile.creator}</span>
                        </div>
                        <div className="border-t border-gray-800 py-3 flex justify-between text-sm">
                            <span className="text-gray-400">Availability</span>
                            <span style={{ color: tile.inStock ? '#4ADE80' : '#F87171' }}>
                                {tile.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        <div className="border-t border-gray-800 pt-4 mt-2">
                            <p className="text-sm text-gray-400 mb-3">Description</p>
                            <p className="text-sm text-gray-300 leading-relaxed">{tile.description}</p>
                        </div>

                        {tile.tags && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {tile.tags.map(tag => (
                                    <span key={tag}
                                        className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}