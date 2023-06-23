import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    //let body = await request.json()
    let creds = request.credentials
    return NextResponse.json({creds})
}

