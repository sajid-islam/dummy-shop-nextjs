"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">Register account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Enter name" value={form.name} onChange={handleChange} />
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              name="agree"
              checked={form.agree}
              onCheckedChange={(checked) => setForm({ ...form, agree: checked })}
            />
            <label htmlFor="agree" className="text-sm">
              I Agree To The{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms Of Service
              </a>{" "}
              And{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button onClick={() => router.push("/")} className="w-full">
            REGISTER
          </Button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already registered?{" "}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
