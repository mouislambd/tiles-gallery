'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSession } from '@/lib/auth-client';

export default function MyProfilePage() {
    const { data: session, isPending } = useSession();
    const user = session?.user;
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push('/login');
        }
    }, [session, isPending, router]);

    const initials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || '?';

    if (isPending) {
        return (
            <div style={{ background: '#111827', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="w-8 h-8 border-2 border-gray-700 rounded-full animate-spin" style={{ borderTopColor: '#C8A96E' }}></div>
            </div>
        );
    }

    if (!session) return null;

    return (
        <div style={{ background: '#111827', minHeight: '100vh' }}>
            <Navbar />
            <div className="max-w-2xl mx-auto px-6 py-16">
                <div className="rounded-2xl p-8" style={{ background: '#1F2937' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
                        <div style={{
                            width: 64, height: 64, borderRadius: '50%',
                            background: '#C8A96E', color: '#111827',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 22, fontWeight: 700, flexShrink: 0
                        }}>
                            {user?.image ? <img src={user.image} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} /> : initials}
                        </div>
                        <div>
                            <div style={{ color: 'white', fontWeight: 600, fontSize: 18 }}>{user?.name || '-'}</div>
                            <div style={{ color: '#9CA3AF', fontSize: 14 }}>{user?.email || ''}</div>
                        </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ color: '#6B7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Display Name</div>
                        <div style={{ background: '#111827', borderRadius: 8, padding: '12px 16px', color: 'white', fontSize: 14 }}>{user?.name || '-'}</div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ color: '#6B7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Email</div>
                        <div style={{ background: '#111827', borderRadius: 8, padding: '12px 16px', color: 'white', fontSize: 14 }}>{user?.email || '-'}</div>
                    </div>
                    <div style={{ marginBottom: 32 }}>
                        <div style={{ color: '#6B7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Photo URL</div>
                        <div style={{ background: '#111827', borderRadius: 8, padding: '12px 16px', color: '#6B7280', fontSize: 14 }}>{user?.image || 'No photo set'}</div>
                    </div>
                    <Link href="/my-profile/update"
                        style={{ background: '#C8A96E', color: '#111827', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, display: 'inline-block', textDecoration: 'none' }}>
                        Edit Profile →
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}