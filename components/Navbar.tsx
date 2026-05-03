'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from '@/lib/auth-client';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    const handleLogout = async () => {
        await signOut();
        router.push('/');
    };

    const links = [
        { href: '/', label: 'Home' },
        { href: '/all-tiles', label: 'All Tiles' },
        { href: '/my-profile', label: 'My Profile' },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-800"
            style={{ background: '#111827' }}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                        style={{ background: '#C8A96E', color: '#111827' }}>
                        TG
                    </div>
                    <span className="text-white font-semibold text-sm">Tile Gallery</span>
                </Link>

                <div className="flex items-center gap-6">
                    {links.map(link => (
                        <Link key={link.href} href={link.href}
                            className="text-sm"
                            style={{ color: pathname === link.href ? '#C8A96E' : '#9CA3AF' }}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {session ? (
                        <>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                style={{ background: '#C8A96E', color: '#111827' }}>
                                {session.user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <button onClick={handleLogout}
                                className="text-sm px-4 py-1.5 rounded font-medium border border-gray-700 text-gray-300">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login"
                            className="text-sm px-4 py-1.5 rounded font-semibold"
                            style={{ background: '#C8A96E', color: '#111827' }}>
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </nav>
    );
}