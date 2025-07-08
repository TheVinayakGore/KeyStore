import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    url: {
      type: String,
      trim: true,
      default: "",
    },
    password: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      enum: ["social", "work", "personal", "finance", "other"],
      default: "",
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Password =
  mongoose.models.Password || mongoose.model("Password", passwordSchema);

export default Password;
