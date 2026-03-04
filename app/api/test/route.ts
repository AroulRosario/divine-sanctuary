import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ status: "ok", message: "Bible API route is reachable", timestamp: new Date().toISOString() });
}
