import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const { title, description, status, dueDate } = todoData;

  const submitButton = (e) => {
    e.preventDefault();
    console.log(title, description, status, dueDate);

    const data = {
      title,
      description,
      status,
      dueDate,
    };
    axios
      .post("http://localhost:5000/tasks", data)
      .then(() => {
        console.log("created successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    setTodoData({
      title: "",
      description: "",
      status: "",
      dueDate: "",
    });
  };
  return (
    <div className=" p-4 mt-4 ">
      <h1 className="text-4xl p-4 font-bold  border-b-2 ">Create Tasks</h1>
      <form onSubmit={submitButton} className="flex flex-col">
        <input
          className="border m-2 px-4 py-1  rounded-md"
          type="text"
          placeholder="Title"
          id="title"
          value={title}
          onChange={(e) => {
            setTodoData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
        />
        <textarea
          className="border m-2 px-4 py-1  rounded-md"
          name="description"
          placeholder="Description"
          id="description"
          value={description}
          onChange={(e) => {
            setTodoData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }));
          }}
        />
        <div>
          <select
            className="border m-2 px-4 py-1  rounded-md"
            id="status"
            name="status"
            value={status}
            onChange={(e) => {
              setTodoData((prevState) => ({
                ...prevState,
                status: e.target.value,
              }));
            }}
          >
            <option value="select">Select status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <input
            className="border m-2 px-4 py-1  rounded-md"
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => {
              setTodoData((prevState) => ({
                ...prevState,
                dueDate: e.target.value,
              }));
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 px-4 w-fit flex mx-auto text-white py-1 rounded-md my-2 font-medium"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
