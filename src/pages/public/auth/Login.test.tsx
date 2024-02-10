import {render, screen} from "@testing-library/react";
import {EN} from "../../../common/constants";
import Login from "./Login";

describe("Login", () => {
  test("Login should have title", async () => {
    render(<Login />);
    expect(screen.getByText(EN.PAGES.LOGIN.TITLE)).toBeInTheDocument();
  });
});
