import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const proxy = (request: NextRequest) => {
  console.log("เข้า proxy", request.nextUrl);
  const token = request.cookies.get("token")?.value;
if (!token) {
  return NextResponse.rewrite(new URL("/", request.url));
}
return NextResponse.next();
};

export const config = {
  matcher: ["/about/:path*"],
};