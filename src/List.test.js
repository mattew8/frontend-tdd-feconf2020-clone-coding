import React from "react";

import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("renders tasks", () => {
    // 각 테스트는 독립적!
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
  });
});
