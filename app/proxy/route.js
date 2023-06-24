import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    let body = await request.json()
    console.log(Object.keys(body))
    console.log(request.body)
    //fetch({url: body.url, method: "POST", body: JSON.parse(body).data, headers: {"Content-Type": "application/json"}})
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

