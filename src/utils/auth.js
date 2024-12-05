"use server";
import { signIn, signOut } from "../lib/auth";

export const handleGoogleLogin = async () => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const handleGoogleLogout = async () => {
  await signOut();
};