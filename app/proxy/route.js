import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    let body = await request.json()
    if (!request.headers.has("url")) return NextResponse.json({msg: "missing url", status: 400});
    if (!request.headers.has("token")) return NextResponse.json({msg: "missing token", status: 401});
    if (body == null || body == undefined || body == {}) return NextResponse.json({msg: "empty body", status: 400});
    return NextResponse.json(Object.keys(body))
}

/**
 * 
 * @param {NextRequest} request 
 */
export async function GET(request) {
    return NextResponse.json({msg: "ping check", status: 200});
}

