import tasks from "../fixtures/tasks";
import { setTasks } from "./actions";
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
});
