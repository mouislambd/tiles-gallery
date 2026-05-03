// import Link from 'next/link';

// export default function NotFound() {
//     return (
//         <div style={{
//             background: '#111827', minHeight: '100vh',
//             display: 'flex', flexDirection: 'column',
//             alignItems: 'center', justifyContent: 'center',
//             textAlign: 'center', padding: 24
//         }}>
//             <div style={{ fontSize: 80, fontWeight: 700, color: '#C8A96E', lineHeight: 1 }}>404</div>
//             <div style={{ color: '#9CA3AF', fontSize: 16, margin: '16px 0 32px' }}>
//                 Page not found — this tile doesn't exist
//             </div>
//             <Link href="/"
//                 style={{
//                     background: '#C8A96E', color: '#111827',
//                     padding: '12px 32px', borderRadius: 8,
//                     fontWeight: 600, fontSize: 14, textDecoration: 'none'
//                 }}>
//                 Go Home
//             </Link>
//         </div>
//     );
// }






import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            background: '#111827', minHeight: '100vh',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: 24
        }}>
            <div style={{ fontSize: 80, fontWeight: 700, color: '#C8A96E', lineHeight: 1 }}>404</div>
            <div style={{ color: '#9CA3AF', fontSize: 16, margin: '16px 0 32px' }}>
                Page not found — this tile does not exist
            </div>
            <Link href="/"
                style={{
                    background: '#C8A96E', color: '#111827',
                    padding: '12px 32px', borderRadius: 8,
                    fontWeight: 600, fontSize: 14, textDecoration: 'none'
                }}>
                Go Home
            </Link>
        </div>
    );
}