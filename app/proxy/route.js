import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    console.log(request.body)
    
}


/**
 * 
 * @param {NextRequest} request 
 */
export async function GET(request) {
    return NextResponse.json(request.headers.get('bod'))
}

