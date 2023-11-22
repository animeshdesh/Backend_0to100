import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deadline: {
      type: Date,
      required: true,
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array Of Sub-Todos
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);
