import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');
  const { pathname } = req.nextUrl;

  // Redirect unauthenticated users trying to access `/dashboard`
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect only dashboard routes
};
