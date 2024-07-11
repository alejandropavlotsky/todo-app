import { getDate } from "./getDate";

export const ListItems = ({itemsList, setItemsList}) => {
  const currentDate = getDate();
  const handleDeleteItem = (index) => {
    const newList = itemsList.filter((_, i) => i !== index);
    setItemsList(newList);
  };
  return (
    <>
      {itemsList.map((item, index) => (
        <li id={index} key={index}>
          <p>{ item }</p> - <span>{ currentDate }</span>
          <button onClick={() => handleDeleteItem(index)}>Eliminar</button>
        </li>
      ))}
    </>
  );
};
