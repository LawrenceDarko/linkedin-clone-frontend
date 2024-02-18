import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const registrationData = await req.json();
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
        // body: registrationData
    })

    const data = await res.json()

    // set cookie
    const cookieStore = cookies()
    cookieStore.set('token', data?.data?.accessToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: true} )

    // console.log('FRONTEND:', JSON.stringify(data))
    // return Response.json(data)
    return NextResponse.json(data)
}