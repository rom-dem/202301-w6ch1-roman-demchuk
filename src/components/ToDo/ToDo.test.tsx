import { render, screen } from "@testing-library/react";
import ToDo from "./ToDo";

describe("Given a ToDo component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a task", () => {
      render(<ToDo />);

      const result = screen.getByRole("listitem");

      expect(result).toBeInTheDocument();
    });
  });
});
