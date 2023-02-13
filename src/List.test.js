import React from "react";

import { fireEvent, render } from "@testing-library/react";
import List from "./List";
import tasks from "../fixtures/tasks";

// behaivor driven development
// 특정 행위 를 중심으로 테스트를 진행 -> describe, context, it

// with tasks => renders taks
// without tasks => renders no task message

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    // test code 존재 - 빠르고, 안전하게 중복 제거 가능!
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks", () => {
    it("renders tasks", () => {
      const tasks = [
        { id: 0, title: "아무 일도 하기 싫다" },
        { id: 1, title: "건물 매입" },
      ];

      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("아무 일도 하기 싫다");
      expect(container).toHaveTextContent("건물 매입");
    });

    it("renders '완료' buttons to delete a task", () => {
      const { container, getAllByText } = renderList(tasks);
      // 여러개의 버튼 있을 수 O - getAllByText란 selector사용

      const buttons = getAllByText("완료");

      // 사용자의 특정 행위를 test -> fireEvent
      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalled();
    });
  });

  context("without tasks", () => {
    it("renders no tasks message", () => {
      const tasks = [];

      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("할 일이 없어요");
    });
  });
});
