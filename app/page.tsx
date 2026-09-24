"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Remember what the user picked
  const [role, setRole] = useState("Software Engineer");
  const [type, setType] = useState("Behavioral");
  const [level, setLevel] = useState("Mid-level");

  // When "Start" is clicked, go to the interview page with the choices in the URL
  function start() {
    const params = new URLSearchParams({ role, type, level });
    router.push(`/interview?${params.toString()}`);
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-5">
        <h1 className="text-3xl font-bold">AI Mock Interview</h1>
        <p className="text-gray-500">Pick your setup and start practicing.</p>

        <label className="block">
          <span className="text-sm font-medium">Role</span>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 bg-transparent"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Interview type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 bg-transparent"
          >
            <option>Behavioral</option>
            <option>Technical</option>
            <option>System Design</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium">Level</span>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 bg-transparent"
          >
            <option>Entry-level</option>
            <option>Mid-level</option>
            <option>Senior</option>
          </select>
        </label>

        <button
          onClick={start}
          className="w-full rounded-lg bg-blue-600 text-white p-3 font-medium hover:bg-blue-700"
        >
          Start interview
        </button>
      </div>
    </main>
  );
}