import { useState } from "react";
import { CreateNewItem } from "./CreateNewItem";

export const List = () => {
  const [itemsList, setItemsList] = useState([])
  return (
    <>
      <CreateNewItem setItemsList={setItemsList} itemsList={itemsList}/>

    </>
  )
}
