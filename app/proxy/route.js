import { NextRequest , NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    //let body = await request.json()
    let creds = request.credentials
    let t = []
    request.headers.forEach((val, key, p) => {
        t.push({[key]: val})
    })
    return NextResponse.json(t)
}

