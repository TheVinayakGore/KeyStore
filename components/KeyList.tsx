"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { FiCopy, FiEdit, FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";
import { Label } from "./ui/label";
import Link from "next/link";
import toast from "react-hot-toast";
import { deletePassword } from "@/app/actions/password.actions";
import EditForm from "./EditForm";

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

const KeyList = ({ passwords }: { passwords: Password[] }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [visibleIds, setVisibleIds] = useState<{ [id: string]: boolean }>({});

  const handelCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard !");
  };

  const handelDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this password ?")) {
      await deletePassword(id);
      toast.success("Password Deleted !");
    }
  };

  const toggleVisibility = (id: string) => {
    setVisibleIds((prev) => ({ ...prev, [id]: !prev[id] }));
    console.log(visibleIds);
  };

  if (passwords.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-medium opacity-50">
          No passwords saved yet !
        </h3>
        <p className="text-gray-400 mt-2">
          Add your first password using the form
        </p>
      </div>
    );
  }

  return (
    <>
      <main>
        <Card className="border-primary/70 gap-2 pb-0">
          <CardHeader>
            <CardTitle>List of Keys</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-3 md:p-6 overflow-auto max-h-screen">
            {passwords.map((password) => (
              <div key={password._id}>
                {editingId === password._id ? (
                  <EditForm
                    password={password}
                    onCancel={() => setEditingId(null)}
                  />
                ) : (
                  <Card className="p-3 md:p-5 border-primary/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center justify-between p-3 border rounded-md w-full">
                      {password.category && (
                        <Badge
                          variant="outline"
                          className="border-primary text-primary rounded p-1.5 px-3 md:px-4"
                        >
                          {password.category.charAt(0).toUpperCase() +
                            password.category.slice(1)}
                        </Badge>
                      )}
                      <div className="flex space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => setEditingId(password._id)}
                        >
                          <FiEdit />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handelDelete(password._id)}
                        >
                          <FiTrash2 />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {password.username && (
                        <div className="p-3 border rounded-md">
                          <Label className="text-sm opacity-50">Username</Label>
                          <div className="flex items-center justify-between w-full">
                            <p className="font-mono">{password.username}</p>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="ml-2 p-1"
                              onClick={() => handelCopy(password.username!)}
                            >
                              <FiCopy size={14} />
                            </Button>
                          </div>
                        </div>
                      )}

                      {password.email && (
                        <div className="p-3 border rounded-md">
                          <Label className="text-sm opacity-50">Email</Label>
                          <div className="flex items-center justify-between w-full">
                            <p className="font-mono">{password.email}</p>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="ml-2 p-1"
                              onClick={() => handelCopy(password.email!)}
                            >
                              <FiCopy size={14} />
                            </Button>
                          </div>
                        </div>
                      )}
                      {password.url && (
                        <div className="p-3 border rounded-md">
                          <Label className="text-sm opacity-50">
                            Website URL
                          </Label>
                          <div className="flex items-center mt-2 w-full">
                            <Link
                              href={password.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {password.url}
                            </Link>
                          </div>
                        </div>
                      )}

                      <div className="p-3 border rounded-md">
                        <Label className="text-sm opacity-50">Password</Label>
                        <div className="flex items-center justify-between w-full">
                          <p className="font-mono">
                            {visibleIds[password._id]
                              ? password.password
                              : ".........."}
                          </p>
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => toggleVisibility(password._id)}
                              aria-label={
                                visibleIds[password._id]
                                  ? "Hide password"
                                  : "Show password"
                              }
                            >
                              {visibleIds[password._id] ? (
                                <FiEyeOff size={14} />
                              ) : (
                                <FiEye size={14} />
                              )}
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handelCopy(password.password)}
                            >
                              <FiCopy size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {password.notes && (
                      <CardFooter className="flex flex-col items-start border rounded-md p-3 w-full">
                        <Label className="text-sm opacity-50">Notes</Label>
                        <div className="flex items-center justify-between mt-1 w-full">
                          <p className="font-mono">{password.notes}</p>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              password.notes && handelCopy(password.notes)
                            }
                            className="p-1"
                            aria-label="Copy notes"
                          >
                            <FiCopy size={14} />
                          </Button>
                        </div>
                      </CardFooter>
                    )}
                  </Card>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default KeyList;
