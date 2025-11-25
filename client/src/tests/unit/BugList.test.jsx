import { render, screen, fireEvent } from "@testing-library/react";
import BugList from "../../components/BugList";

const bugs = [
  { _id: "1", title: "Bug 1", description: "Desc 1", status: "open" }
];

test("renders bug list and triggers actions", () => {
  const changeStatus = jest.fn();
  const removeBug = jest.fn();

  render(<BugList bugs={bugs} changeStatus={changeStatus} removeBug={removeBug} />);

  fireEvent.click(screen.getByText(/in progress/i));
  expect(changeStatus).toHaveBeenCalledWith("1", "in-progress");

  fireEvent.click(screen.getByText(/delete/i));
  expect(removeBug).toHaveBeenCalledWith("1");
});
