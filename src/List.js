import React from "react";

const List = ({ tasks = [], onClick }) => {
  if (tasks.length === 0) {
    return <h2>할 일이 없어요</h2>;
  }

  return (
    <>
      {tasks.map((task) => (
        <h2 key={task.id}>
          {task.title}
          <button onClick={() => onClick(task.id)}>완료</button>
        </h2>
      ))}
    </>
  );
};

export default List;
