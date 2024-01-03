import {NextRequest, NextResponse} from "next/server";
import {User} from "@/lib/definitions";
export async function GET(request: NextRequest) {
    const users: User[] = [
        {
            firstName: "John",
            lastName: "Doe",
        },
        {
            firstName: 'Pierre',
            lastName: 'Dupont'
        },
        {
            firstName: 'Jean',
            lastName: 'Durant'
        }
    ]

    return NextResponse.json(users, {status: 200});
}