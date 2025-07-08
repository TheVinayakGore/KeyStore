import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { updatePassword } from "@/app/actions/password.actions";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MdOutlineUpdate } from "react-icons/md";
import toast from "react-hot-toast";

interface Password {
  _id: string;
  title: string;
  username?: string;
  email?: string;
  url?: string;
  password: string;
  category?: string;
  notes?: string;
}

interface FormData {
  username: string;
  email: string;
  url: string;
  password: string;
  category: string;
  notes: string;
}

const EditForm = ({
  password,
  onCancel,
}: {
  password: Password;
  onCancel: () => void;
}) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: password.username || "",
      email: password.email || "",
      url: password.url || "",
      password: password.password,
      category: password.category || "",
      notes: password.notes || "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });
    if (data.category) {
      formData.append("category", data.category);
    }
    await updatePassword(password._id, formData);
    toast.success("Credentials Updated !");
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="username" className="my-3">
            Username
          </Label>
          <Input id="username" {...register("username")} />
        </div>
        <div>
          <Label htmlFor="email" className="my-3">
            Email
          </Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
      </div>

      <div>
        <Label htmlFor="url" className="my-3">
          Website URL
        </Label>
        <Input id="url" type="url" {...register("url")} />
      </div>

      <div>
        <Label htmlFor="password" className="my-3">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <Label htmlFor="category" className="my-3">
          Category
        </Label>
        <Select
          {...register("category")}
          defaultValue={password.category || ""}
        >
          <SelectTrigger className="cursor-pointer w-full">
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
        <Label htmlFor="url" className="my-3">
          Notes
        </Label>
        <Textarea
          id="notes"
          {...register("notes")}
          className="w-full"
          placeholder="Additional Information"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Button type="submit" className="flex-1 p-6 text-base text-white">
          <MdOutlineUpdate className="mr-2 size-6" /> Update Chnages
        </Button>
        <Button
          variant="outline"
          onClick={onCancel}
          type="button"
          className="flex-1 p-6 text-base"
        >
          <FiX className="mr-2 size-6" /> Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
