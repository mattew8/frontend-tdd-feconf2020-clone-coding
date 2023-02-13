import tasks from "../fixtures/tasks";
import { setTasks, deleteTask } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  describe("setTasks", () => {
    it("change talks array", () => {
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );
      expect(state.tasks).not.toHaveLength(0);
    });
  });

  describe("deleteTask", () => {
    it("removes the task from tasks", () => {
      const state = reducer(
        {
          tasks: [{ id: 0, title: "아무 일도 하기 싫다" }],
        },
        deleteTask(0)
      );
      expect(state.tasks).toHaveLength(0);
    });
  });
});
