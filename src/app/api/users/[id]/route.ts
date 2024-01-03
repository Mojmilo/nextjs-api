import {NextRequest, NextResponse} from "next/server";
import {User} from "@/lib/definitions";
export async function GET(request: NextRequest) {
    const user: User = {
        firstName: "John",
        lastName: "Doe",
    }

    return NextResponse.json(user, {status: 200});
}