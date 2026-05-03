import Link from 'next/link';
import Image from 'next/image';

export default function TileCard({ tile }) {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-700 hover:-translate-y-1 transition-transform"
            style={{ background: '#1F2937' }}>

            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                    unoptimized
                />
                {!tile.inStock && (
                    <div className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full"
                        style={{ background: '#7F1D1D', color: '#FCA5A5' }}>
                        Out of Stock
                    </div>
                )}
            </div>

            <div className="p-4">
                <span className="text-xs uppercase tracking-wider" style={{ color: '#C8A96E' }}>
                    {tile.category}
                </span>
                <h3 className="text-white font-medium mt-1 mb-1 text-sm">{tile.title}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{tile.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-semibold" style={{ color: '#C8A96E' }}>${tile.price}</span>
                    <Link href={`/tile/${tile.id}`}
                        className="text-xs px-3 py-1.5 rounded font-medium"
                        style={{ background: '#C8A96E', color: '#111827' }}>
                        View Details
                    </Link>
                </div>
            </div>

        </div>
    );
}