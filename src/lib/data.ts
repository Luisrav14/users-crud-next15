import fs from "fs";
import path from "path";
import { User } from "@/interfaces/user";

const filePath = path.join(process.cwd(), "data", "users.json");

export const getUsers = (): User[] => {
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
};

export const saveUsers = (users: User[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export const addUser = (user: User): User => {
  const users = getUsers();

  const { id, ...userWithoutId } = user;
  const newUser = { id: Date.now(), ...userWithoutId };

  users.push(newUser);
  saveUsers(users);

  return newUser;
};

export const updateUser = (updatedUser: User): User => {
  const users = getUsers();
  const newUsers = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
  saveUsers(newUsers);
  return updatedUser;
};

export const deleteUser = (id: number): boolean => {
  const users = getUsers();
  const filtered = users.filter((u) => u.id !== id);
  const deleted = users.length !== filtered.length;
  if (deleted) {
    saveUsers(filtered);
  }
  return deleted;
};
