import { NextRequest , NextResponse } from "next/server";
import { NextApiRequest } from "next";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    if (!request.headers.has("url")) return NextResponse.json({msg: "missing url", status: 400});
    if (!request.headers.has("token")) return NextResponse.json({msg: "missing token", status: 401});
    if (!request.bodyUsed) return NextResponse.json({msg: "empty body", status: 400});
    let body = await request.json()
    return NextResponse.json({t: Object.keys(body)})
}

/**
 * 
 * @param {NextRequest} request 
 */
export async function GET(request) {
    let data = {}
    const { searchParams } = new URL(request.url)
    if (searchParams){
        searchParams.forEach((value, key) => {
            data[key] = value
        })
    }
    return NextResponse.json({msg: "ping check", status: 200, data});
}

