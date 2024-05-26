import React, { useEffect, useState } from "react";
import axios from "axios";

const All = () => {
  const [todos, setTodos] = useState([
    {
      title: "",
      description: "",
      status: "",
      dueDate: "",
    },
  ]);

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        console.log("deleted tasks");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(todos);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setTodos(response.data.todo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]);

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className=" p-4 m-4 ">
      <h1 className="text-4xl p-4 font-bold border-b-2">
        All tasks listed here:
      </h1>
      <div className="grid grid-cols-2 ">
        {todos.map((todo, index) => (
          <div className="border flex flex-col m-2 rounded-md" key={index}>
            <h1 className="m-2 py-1">ID: {todo._id}</h1>
            <h1 className="border m-2 px-4 py-1  rounded-md">{todo.title}</h1>
            <h1 className="border m-2 px-4 py-1  rounded-md">
              {todo.description}
            </h1>
            <div>
              <select
                className="border m-2 px-4 py-1  rounded-md"
                id="status"
                name="status"
                disabled
                value={todo.status}
                onChange={(e) => {
                  setTodos((prevState) => ({
                    ...prevState,
                    status: e.target.value,
                  }));
                }}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <input
                className="border m-2 px-4 py-1  rounded-md"
                type="date"
                disabled
                value={formatDate(todo.dueDate)}
                onChange={(e) => {
                  setTodos((prevState) => ({
                    ...prevState,
                    dueDate: e.target.value,
                  }));
                }}
              />
              <button
                className="bg-red-600 px-4 w-fit text-white py-1 rounded-md my-2 font-medium"
                onClick={() => deleteTask(todo._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
