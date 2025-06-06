"use client";

import { useState } from "react";
import { User } from "@/interfaces/user";
import { updateUser, deleteUser } from "@/lib/api/users";

export default function UsersTable({ users, setUsers }: { users: User[]; setUsers: (users: User[]) => void }) {
  const [editableRows, setEditableRows] = useState<number[]>([]);

  const handleEdit = (id: number, field: "name" | "email", value: string) => {
    const updated = users.map((user) => (user.id === id ? { ...user, [field]: value } : user));
    setUsers(updated);
  };

  const handleSave = async (id: number) => {
    const userToSave = users.find((user) => user.id === id);
    if (!userToSave) return;

    try {
      await updateUser(userToSave);
      setEditableRows((prev) => prev.filter((rowId) => rowId !== id));
      alert("Usuario actualizado");
    } catch (error) {
      alert("Hubo un problema al actualizar el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  const toggleEdit = (id: number) => {
    setEditableRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]));
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
        alert(`Usuario con ID ${id} eliminado.`);
      } catch (error) {
        alert("Hubo un problema al eliminar el usuario. Por favor, inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Correo
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-4">
                <input
                  className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 ${
                    editableRows.includes(user.id)
                      ? "border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      : "border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  value={user.name}
                  onChange={(e) => handleEdit(user.id, "name", e.target.value)}
                  disabled={!editableRows.includes(user.id)}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 ${
                    editableRows.includes(user.id)
                      ? "border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      : "border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  value={user.email}
                  onChange={(e) => handleEdit(user.id, "email", e.target.value)}
                  disabled={!editableRows.includes(user.id)}
                />
              </td>
              <td className="px-6 py-4 flex items-center justify-center gap-2">
                {editableRows.includes(user.id) ? (
                  <button onClick={() => handleSave(user.id)} className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded">
                    Guardar
                  </button>
                ) : (
                  <button onClick={() => toggleEdit(user.id)} className="text-white bg-amber-500 hover:bg-amber-500/90 px-3 py-1 rounded">
                    Editar
                  </button>
                )}
                <button onClick={() => handleDelete(user.id)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
