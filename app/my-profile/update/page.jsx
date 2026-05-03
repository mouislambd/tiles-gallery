'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSession, authClient } from '@/lib/auth-client';

export default function UpdateProfilePage() {
    const { data: session } = useSession();
    const user = session?.user;
    const router = useRouter();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    // session load হলে update করো
    if (user?.name && !name) setName(user.name);
    if (user?.image && !image) setImage(user.image);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authClient.updateUser({ name, image });
            setSuccess(true);
            setTimeout(() => router.push('/my-profile'), 1500);
        } catch {
            // error
        }
        setLoading(false);
    };

    return (
        <div style={{ background: '#111827', minHeight: '100vh' }}>
            <Navbar />
            <div className="max-w-2xl mx-auto px-6 py-16">
                <Link href="/my-profile" style={{ color: '#C8A96E', fontSize: 14, display: 'inline-block', marginBottom: 24 }}>
                    ← Back to Profile
                </Link>
                <div className="rounded-2xl p-8" style={{ background: '#1F2937' }}>
                    <h1 style={{ color: 'white', fontSize: 22, fontWeight: 600, marginBottom: 24 }}>Update Information</h1>

                    {success && (
                        <div style={{ background: '#065F46', color: '#6EE7B7', padding: '12px 16px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
                            Updated successfully!
                        </div>
                    )}

                    <form onSubmit={handleUpdate}>
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ color: '#9CA3AF', fontSize: 13, display: 'block', marginBottom: 6 }}>Display Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder={user?.name || 'Your name'}
                                style={{ width: '100%', background: '#111827', border: '1px solid #374151', borderRadius: 8, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ marginBottom: 24 }}>
                            <label style={{ color: '#9CA3AF', fontSize: 13, display: 'block', marginBottom: 6 }}>Photo URL</label>
                            <input
                                type="text"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                placeholder={user?.image || 'https://example.com/photo.jpg'}
                                style={{ width: '100%', background: '#111827', border: '1px solid #374151', borderRadius: 8, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>

                        <button type="submit" disabled={loading}
                            style={{ background: '#C8A96E', color: '#111827', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
                            {loading ? 'Updating...' : 'Update Information'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}