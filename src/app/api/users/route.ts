import { User } from "@/interfaces/user";
import { NextRequest, NextResponse } from "next/server";
import { getUsers, addUser, updateUser } from "@/lib/data";

export async function GET() {
  try {
    const users = getUsers();
    return NextResponse.json(users);
  } catch {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: Omit<User, "id"> = await req.json();
    const newUser = addUser(body as User);
    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user: User = await req.json();
    const updatedUser = updateUser(user);
    return NextResponse.json(updatedUser);
  } catch {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
