import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    let body = await request.json()
    return NextResponse.json(Object.keys(body))
}

