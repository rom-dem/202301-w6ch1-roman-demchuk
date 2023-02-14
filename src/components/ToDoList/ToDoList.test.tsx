import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe("Given ToDoList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of to-dos", () => {
      render(<ToDoList />);

      const result = screen.getByRole("list");

      expect(result).toBeInTheDocument();
    });
  });
});
