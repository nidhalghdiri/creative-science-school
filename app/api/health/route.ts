import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Creative Science Private School - Salalah",
    timestamp: new Date().toISOString(),
  });
}
