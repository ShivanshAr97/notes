import expressAsyncHandler from "express-async-handler";
import Todo from "../models/todoModel.js";

export const getTodo = expressAsyncHandler(async (req, res) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json({ todo });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export const getSingleTodo = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    return response.status(200).json(todo);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});
export const createTodo = expressAsyncHandler(async (req, res) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.dueDate) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newTodo = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
    };

    const todo = await Todo.create(newTodo);

    return res.status(201).send(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export const updateTodo = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).send({ message: "Todo updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export const deleteTodo = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Todo.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).send({ message: "Todo deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
