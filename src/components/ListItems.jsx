import { getDate } from "./getDate";

export const ListItems = ({itemsList}) => {
  const currentDate = getDate();
  return (
    <>
      {itemsList.map((item) => (
        <p key={item}>
          {item} - {currentDate}
        </p>
      ))}
    </>
  );
};
