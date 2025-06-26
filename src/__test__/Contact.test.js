import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Content us page test cases", () => {
  it("Should load heading of contact us component", () => {
    // whenever testing react component first render that component in js dom
    render(<Contact />);
    // const heading = screen.getByRole("heading");
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button of contact us component", () => {
    // whenever testing react component first render that component in js dom
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load check text of contact us component", () => {
    // whenever testing react component first render that component in js dom
    render(<Contact />);
    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
  });
});
