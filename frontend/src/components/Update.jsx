import React, { useState } from "react";
import axios from "axios";

const Update = () => {
  const [todoData, setTodoData] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const { id, title, description, status, dueDate } = todoData;

  const updateTask = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/tasks/${id}`, todoData)
      .then(() => {
        console.log("todo update successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" p-4">
      <h1 className="text-4xl p-4 font-bold border-b-2">Update Task</h1>
      <form onSubmit={updateTask} className="flex flex-col">
        <input
          className="border m-2 px-4 py-1  rounded-md"
          type="text"
          placeholder="ID"
          id="id"
          value={id}
          onChange={(e) => {
            setTodoData((prevState) => ({
              ...prevState,
              id: e.target.value,
            }));
          }}
        />
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
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
