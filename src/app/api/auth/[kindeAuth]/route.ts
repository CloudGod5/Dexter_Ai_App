import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<NextResponse> {
  const endpoint = params.kindeAuth
  const handler = await handleAuth(request, endpoint)
  if (typeof handler === 'function') {
    return handler(request, new NextResponse())
  } else {
    return handler
  }
}