import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a form with an aria label 'Input a new to-do'", () => {
      const ariaLabel = "Input a new to-do";
      render(<Form />);

      const result = screen.getByLabelText(ariaLabel);

      expect(result).toBeInTheDocument();
    });
  });
});
