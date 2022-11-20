import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("render App", () => {
  render(<App />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/add/i);
  expect(linkElement).toBeInTheDocument();
});
