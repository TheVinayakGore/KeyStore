import React from "react";
import {
  FiLock,
  FiShield,
  FiEye,
  FiGrid,
  FiSearch,
  FiDownload,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiLock className="size-4 md:size-6" />,
      title: "Secure Storage",
      description:
        "All your password are encrypted and stored in your personal vault.",
    },
    {
      icon: <FiShield className="size-4 md:size-6" />,
      title: "One-Click Copy",
      description:
        "Easily copy passwords with a single click—no more typing complex strings.",
    },
    {
      icon: <FiEye className="size-4 md:size-6" />,
      title: "Password Visibility",
      description:
        "Toggle between hidden and visible passwords when you need to check them.",
    },
    {
      icon: <FiGrid className="size-4 md:size-6" />,
      title: "Categories",
      description:
        "Organize your credentials by type (social, work, finance, etc.) for easy access.",
    },
    {
      icon: <FiSearch className="size-4 md:size-6" />,
      title: "Quick Search",
      description:
        "Find any credential instantly with our powerful search functionality.",
    },
    {
      icon: <FiDownload className="size-4 md:size-6" />,
      title: "Export Options",
      description: "Backup your passwords securely whenever you need them.",
    },
  ];

  return (
    <>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-3 md:p-6 bg-gradient-to-br from-primary/10 border borer-primary/40 rounded-md hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              <div className="flex items-center mb-2 md:mb-4">
                <div className="p-2 md:p-3 bg-primary/30 text-primary rounded-md mr-2 md:mr-4">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="opacity-60 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Features;
