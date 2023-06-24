import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    if (!request.headers.has("url")) return NextResponse.json({msg: "missing url", status: 400});
    if (!request.headers.has("token")) return NextResponse.json({msg: "missing token", status: 401});
    let body
    try {
        body = await request.json()
        fetch({url: request.headers.get('url'), method: "post", body: JSON.stringify(body), headers: {"Content-Type": "application/json"}})
    }catch {
        return NextResponse.json({msg: "empty body", status: 400});
    }
    return NextResponse.json(body)
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

