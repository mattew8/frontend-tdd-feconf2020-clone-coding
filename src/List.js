import React from "react";

const List = ({ tasks = [] }) => {
  return (
    <>
      {tasks.map((task) => (
        <h2 key={task.id}>{task.title}</h2>
      ))}
    </>
  );
};

export default List;
