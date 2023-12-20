import List from "./list/list";

export default function Profile() {
  const myInfo = {
    name: "Marina Martinović",
    location: "SB",
    Age: "26",
    colors: [
      { id: 1, name: "red" },
      { id: 2, name: "green" },
      { id: 3, name: "yellow" },
    ],
  };

  return (
    <>
      <h1>profile</h1>
      <p>name: {myInfo.name} </p>
      <p>location: {myInfo.location}</p>
      <p>age: {myInfo.Age}</p>
      <h2>favorite colors: </h2>
      <List colors={myInfo.colors}></List>
    </>
  );
}
