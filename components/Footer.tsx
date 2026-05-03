import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-800" style={{ background: '#111827' }}>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                                style={{ background: '#C8A96E', color: '#111827' }}>TG</div>
                            <span className="text-white font-semibold">Tile Gallery</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Premium tiles for every space. Discover ceramic, marble, mosaic and more.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-sm text-gray-500 hover:text-yellow-400">Home</Link>
                            <Link href="/all-tiles" className="text-sm text-gray-500 hover:text-yellow-400">All Tiles</Link>
                            <Link href="/my-profile" className="text-sm text-gray-500 hover:text-yellow-400">My Profile</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Contact Us</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                            <span>hello@tilegallery.com</span>
                            <span>+880 1234-567890</span>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>

                </div>
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-600">
                    © 2025 Tile Gallery · All rights reserved
                </div>
            </div>
        </footer>
    );
}