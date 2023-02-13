import React from "react";

import { render } from "@testing-library/react";
import List from "./List";

// behaivor driven development
// 특정 행위 를 중심으로 테스트를 진행 -> describe, context, it

// with tasks => renders taks
// without tasks => renders no task message

describe("List", () => {
  context("with tasks", () => {
    it("renders tasks", () => {
      const tasks = [
        {
          id: 0,
          title: "첫 테스트",
        },
        {
          id: 1,
          title: "두번째 할 일",
        },
      ];

      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("첫 테스트");
      expect(container).toHaveTextContent("두번째 할 일");
    });
  });

  context("without tasks", () => {
    it("renders no tasks message", () => {
      const tasks = [];

      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("할 일이 없어요");
    });
  });
});
