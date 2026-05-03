import { NextResponse } from "next/server";

export function middleware(request) {
    const session =
        request.cookies.get("better-auth.session_token") ||
        request.cookies.get("__Secure-better-auth.session_token");

    const { pathname } = request.nextUrl;

    const privateRoutes = ["/my-profile", "/tile"];

    const isPrivate = privateRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isPrivate && !session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/my-profile/:path*", "/tile/:path*"],
};