"use client";

import UsersTable from "@/components/UsersTable";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">
      <UsersTable users={users} setUsers={setUsers} />
    </main>
  );
};

export default UsersPage;
