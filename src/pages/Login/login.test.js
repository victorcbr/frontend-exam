import React from "react";
import { render } from "@testing-library/react";
import Login from "../Login";

test("renders learn react link", () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
