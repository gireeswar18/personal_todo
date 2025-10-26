import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./AddTask";

const baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${baseURL}/todos`);
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseURL}/delete/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleDone = async (id) => {
    try {
      const res = await axios.put(`${baseURL}/mark/${id}`);

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo
        )
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="px-[10%]">
      <AddTask />

      <h2 className="text-xl font-semibold text-center mt-6">Tasks To Do</h2>

      <div className="overflow-x-auto px-[5%] mt-5">
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Task
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Description
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                Status
              </th>
              <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {todos
              .slice()
              .sort((a, b) => a.completed - b.completed)
              .map((todo) => (
                <tr key={todo.id} className="border-b-[0.5px] border-gray-200">
                  <td className="px-4 py-2 font-semibold">{todo.title}</td>
                  <td className="px-4 py-2">{todo.description}</td>
                  <td className="px-4 py-2">
                    {todo.completed ? "Done" : "Pending"}
                  </td>
                  <td className="flex justify-around gap-2 items-center px-4 py-2">
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-red-400 text-white px-4 py-1 rounded-md cursor-pointer hover:scale-105"
                    >
                      Delete
                    </button>
                    {!todo.completed && (
                      <button
                        onClick={() => handleDone(todo.id)}
                        className="bg-green-400 text-white px-4 py-1 rounded-md cursor-pointer hover:scale-105"
                      >
                        Done
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
