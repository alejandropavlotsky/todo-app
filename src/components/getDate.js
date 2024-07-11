export const getDate = () =>{
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  hour < 10 ? hour = `0${hour}` : hour;
  minute < 10 ? minute = `0${minute}` : minute;
  return `${year}/${month}/${day} - ${hour}:${minute}`;
};