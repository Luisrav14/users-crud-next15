import { User } from "@/interfaces/user";

const USERS_BASE_PATH = "/api/users";

// GET all users
export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(USERS_BASE_PATH);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

// POST new user
export async function createUser(user: Omit<User, "id">): Promise<User> {
  const res = await fetch(USERS_BASE_PATH, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

// PUT (update) user
export async function updateUser(user: User): Promise<User> {
  const res = await fetch(USERS_BASE_PATH, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res.json();
}

// DELETE user
export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${USERS_BASE_PATH}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete user");
}
