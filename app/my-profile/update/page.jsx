'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function UpdateProfilePage() {
    const router = useRouter();
    const [name, setName] = useState('Rahim Jamal');
    const [image, setImage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        router.push('/my-profile');
    };

    return (
        <div style={{ background: '#111827', minHeight: '100vh' }}>
            <Navbar />

            <div style={{ maxWidth: 600, margin: '0 auto', padding: '64px 24px' }}>

                <Link href="/my-profile"
                    style={{ color: '#C8A96E', fontSize: 14, textDecoration: 'none', display: 'inline-block', marginBottom: 24 }}>
                    ← Back to Profile
                </Link>

                <div style={{ background: '#1F2937', borderRadius: 16, padding: 32 }}>

                    <h1 style={{ color: 'white', fontSize: 20, fontWeight: 600, marginBottom: 24 }}>
                        Update Information
                    </h1>

                    <form onSubmit={handleUpdate}>

                        <div style={{ marginBottom: 16 }}>
                            <label style={{ display: 'block', color: '#9CA3AF', fontSize: 13, marginBottom: 8 }}>
                                Display Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                style={{
                                    width: '100%', padding: '12px 16px',
                                    background: '#111827', border: '1px solid #374151',
                                    borderRadius: 8, color: 'white', fontSize: 14, outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: 32 }}>
                            <label style={{ display: 'block', color: '#9CA3AF', fontSize: 13, marginBottom: 8 }}>
                                Photo URL
                            </label>
                            <input
                                type="url"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                placeholder="https://example.com/photo.jpg"
                                style={{
                                    width: '100%', padding: '12px 16px',
                                    background: '#111827', border: '1px solid #374151',
                                    borderRadius: 8, color: 'white', fontSize: 14, outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        <button type="submit"
                            style={{
                                background: '#C8A96E', color: '#111827',
                                padding: '12px 24px', borderRadius: 8,
                                fontWeight: 600, fontSize: 14,
                                border: 'none', cursor: 'pointer'
                            }}>
                            Update Information
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}