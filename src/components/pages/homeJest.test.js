import { render, screen } from "@testing-library/react";

import Home from "./Home";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText("Begin journey");
  expect(linkElement).toBeInTheDocument();
});

test("displays the title text", () => {
  render(<Home />);
  const title = screen.getByText(
    "Your guided path to programming enlightenment"
  );
  expect(title).toBeInTheDocument();
});

test("has a img with an alt tag of bolt", () => {
  render(<Home />);
  const beginJourneyButton = screen.getByRole("img", {
    name: "bolt",
  });
  expect(beginJourneyButton).toBeInTheDocument();
});

test("has a img with an alt tag of money", () => {
  render(<Home />);
  const beginJourneyButton = screen.getByRole("img", {
    name: "money",
  });
  expect(beginJourneyButton).toBeInTheDocument();
});
