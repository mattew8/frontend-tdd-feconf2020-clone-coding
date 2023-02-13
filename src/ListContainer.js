import React from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./actions";

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(deleteTask(id));
  }

  return <List tasks={tasks} onClick={handleClick} />;
}
