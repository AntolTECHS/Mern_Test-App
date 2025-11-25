import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../../components/BugForm";

test("renders BugForm and submits input", () => {
  const addBug = jest.fn();
  render(<BugForm addBug={addBug} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: "Test Bug" } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: "Bug Desc" } });
  fireEvent.click(screen.getByText(/report bug/i));

  expect(addBug).toHaveBeenCalledWith({ title: "Test Bug", description: "Bug Desc", status: "open" });
});
