import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    let body = await request.json()
    fetch(body.url, {method: "post", body: JSON.stringify(body.data), headers: {"Content-Type": "application/json"}})
    return NextResponse.json({yuh: "Ok"})
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

