import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    request.json().then(d => {
        return NextResponse.json(d)
    })
}

