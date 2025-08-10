"use server";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const message = searchParams.get('message') || 'no message';

    return NextResponse.json({ message: `you say: ${message}! i say Hello, World!`});
}