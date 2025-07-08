"use server";

import connectDB from "@/lib/db";
import Password from "@/models/Password";
import { revalidatePath } from "next/cache";

export async function getPasswords() {
  try {
    await connectDB();
    const passwords = await Password.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(passwords));
  } catch (error) {
    console.error("Error fetching passwords:", error);
    return [];
  }
}

export async function createPassword(formData: FormData) {
  try {
    await connectDB();

    const passwordData = {
      title: formData.get("title") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      url: formData.get("url") as string,
      password: formData.get("password") as string,
      category: formData.get("category") as string,
      notes: formData.get("notes") as string,
    };

    const password = new Password(passwordData);
    await password.save();

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error fetching passwords :", error);
    return { success: false, error: "Failed to create password !" };
  }
}

export async function updatePassword(id: string, formData: FormData) {
  try {
    await connectDB();

    const updateData = {
      title: formData.get("title") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      url: formData.get("url") as string,
      category: formData.get("category") as string,
      notes: formData.get("notes") as string,
    };

    await Password.findByIdAndUpdate(id, updateData);

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating passwords :", error);
    return { success: false, error: "Failed to update password !" };
  }
}

export async function deletePassword(id: string) {
  try {
    await connectDB();
    await Password.findByIdAndDelete(id);

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting passwords :", error);
    return { success: false, error: "Failed to delete password !" };
  }
}
