import React from "react";
import "./index.css";

const Form = ({ task, handleChangeInput, handleAddItemToList }) => {
  return (
    <form className="form-wrapper" onSubmit={handleAddItemToList}>
      <input 
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={handleChangeInput}
        value={task}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Form;
