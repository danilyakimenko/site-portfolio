import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  console.log('🔥 PROXY:', request.nextUrl.pathname)

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}