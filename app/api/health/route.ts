import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Creative Science Private School - Salalah",
    timestamp: new Date().toISOString(),
  });
}
