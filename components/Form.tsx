"use client";
import React, { useState } from "react";
import { createPassword } from "@/app/actions/password.actions";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { BsArrowRepeat, BsSave2 } from "react-icons/bs";
import toast from "react-hot-toast";

interface FormData {
  username: string;
  email: string;
  url: string;
  password: string;
  notes: string;
}

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "category" && value) formData.append(key, value as string);
    });
    formData.append("category", category);
    await createPassword(formData);
    toast.success("New Credentials Added !");
    setLoading(false);
    reset();
    setCategory("");
  };

  return (
    <>
      <main>
        <Card id="try-now" className="border-primary/70">
          <CardHeader>
            <CardTitle>Add new Credentials</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="username" className="my-2">
                    Username
                  </Label>
                  <Input
                    id="username"
                    {...register("username")}
                    placeholder="username123"
                    className="p-5"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="my-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="example@gmail.com"
                    className="p-5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="url" className="my-2">
                  Website URL
                </Label>
                <Input
                  id="url"
                  type="url"
                  {...register("url")}
                  placeholder="https://example.com"
                  className="p-5"
                />
              </div>
              <div>
                <Label htmlFor="password" className="my-2">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="https://example.com"
                  className="p-5"
                />
              </div>
              <div>
                <Label htmlFor="category" className="my-2">
                  Category
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="cursor-pointer p-5 w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes" className="my-2">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  {...register("notes")}
                  className="w-full"
                  placeholder="Additional Information"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="p-6 text-sm md:text-base text-white font-medium w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <BsArrowRepeat className="size-4 mr-1.5 animate-spin" />{" "}
                    Saving...
                  </>
                ) : (
                  <>
                    <BsSave2 className="size-4 mr-1.5" /> Save Credentials
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Form;
