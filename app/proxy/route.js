import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    return NextResponse.json(request.body)
}


/**
 * 
 * @param {NextRequest} request 
 */
export async function GET(request) {
    if (request.headers?.get('url')) {

    }
}

