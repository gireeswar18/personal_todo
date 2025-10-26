import axios from "axios";
import React, { useState } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

const AddTask = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    try {
      if (task.length != 0) {
        const resp = await axios.post(`${baseURL}/create`, {
          title: task,
          description: desc,
        });
        console.log(resp);
        window.location.reload();
      }
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setTask("");
      setDesc("");
    }
  };

  return (
    <div className="flex justify-center items-center rounded-xl mt-6">
      <div className="flex flex-col bg-white rounded-xl w-[50%] gap-4">
        <h4 className="text-center py-3 border-b-[0.5px] border-gray-300 bg-gray-100 rounded-t-xl">
          Add Task
        </h4>
        <input
          type="text"
          placeholder="Task heading"
          className="px-4 py-1
            rounded-sm focus:outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          className="px-4 py-1
            rounded-sm focus:outline-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="mx-[35%] my-[1%] hover:cursor-pointer bg-blue-400 text-white px-4 py-1 rounded-md"
          onClick={() => handleSubmit()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
