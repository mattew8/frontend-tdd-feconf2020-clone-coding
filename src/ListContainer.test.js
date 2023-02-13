import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fireEvent, render } from "@testing-library/react";
import ListContainer from "./ListContainer";
import tasks from "../fixtures/tasks";

// 실제 useSelector가 아닌, 우리가 mocking한 함수를 사용해줘야 함
jest.mock("react-redux"); // mocking할 파일 명시

describe("ListContainer", () => {
  // ListContainer 내부 test에서는 useSelector를 사용할 수 X
  // -> 가짜로 구현(mocking)해줘야 함
  useSelector.mockImplementation((selector) =>
    // useSelector의 동작 방식을 정의!
    // tasks를 return하는 것 처럼 구현할 수 있는 것
    selector({
      tasks: tasks,
    })
  );

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it("renders tasks", () => {
    const { container, getAllByText } = render(<ListContainer />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");
    const buttons = getAllByText("완료");
    // 사용자의 특정 행위를 test -> fireEvent
    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 0 },
    });
  });
});
