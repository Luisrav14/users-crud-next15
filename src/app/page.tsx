"use client";

import { useEffect } from "react";
import UserForm from "@/components/UserForm";

export default function Home() {
  useEffect(() => {
    fetch("/api/users").then((res) => res.json());
  }, []);

  return (
    <main className="mx-auto h-[90vh] flex items-center justify-center">
      <div className="p-8 rounded-lg min-h-[50vh] min-w-[60vh]">
        <div className="bg-gray-800 p-8 rounded-xl">
          <h1 className="text-xl font-bold mb-5">Registro de Usuarios</h1>
          <UserForm />
        </div>
      </div>
    </main>
  );
}
