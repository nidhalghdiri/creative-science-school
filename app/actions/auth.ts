"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  
  // Attempt to sign in with Supabase
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login failed:", error.message);
    // Real implementation would pass this back to the form state
    redirect("/en/admin/login?error=InvalidCredentials");
  }

  // Redirect to dashboard on success
  redirect("/en/admin");
}
