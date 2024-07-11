import { useState } from "react";
import { ListItems } from "./ListItems";

export const CreateNewItem = ({setItemsList, itemsList}) => {
  const [todoItem, setTodoItem] = useState("");

  const handleAddItem = (e) => {
    if (todoItem.trim() !== "") {
      setItemsList([...itemsList, todoItem]);
      setTodoItem("")
    }
  };

  return (
    <>
      <input
        type="text"
        text="Agregar nueva tarea"
        placeholder="Agregar nueva tarea"
        name="new-item"
        value={ todoItem }
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={handleAddItem }>Crear</button>
      <ul>
        <ListItems itemsList={ itemsList } />
    </ul>
    </>
  );
};
