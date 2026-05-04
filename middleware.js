import { NextResponse } from "next/server";

export function middleware(request) {
    const cookies = request.cookies.getAll();
    const hasSession = cookies.some(c =>
        c.name.includes('session') || c.name.includes('better-auth')
    );

    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/my-profile') && !hasSession) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith('/tile/') && !hasSession) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/my-profile/:path*", "/tile/:path*"],
};