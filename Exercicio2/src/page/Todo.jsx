import React, { useState } from "react";
import Form from "../components/Form/index";
import List from "../components/List/index";
import "./Todo.css"
const Todo = () => {
  const [task, setTask] = useState(""); 
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>Lista De Compras</h1>
      <Form
        task={task}
        handleChangeInput={handleChangeInput}
        handleAddItemToList={handleAddItemToList}
      />
      <List itemsList={itemsList} />
    </div>
  );
};

export default Todo;
