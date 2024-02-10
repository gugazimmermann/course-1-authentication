import {render, screen, fireEvent} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {EN, ROUTES} from "../../common/constants";
import LoginButton from "./LoginButton";
import Login from "../../pages/public/auth/Login";

describe("LoginButton", () => {
  test("LoginButton should change route on click", () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.HOME]}>
        <Routes>
          <Route path={ROUTES.HOME} element={<LoginButton />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </MemoryRouter>,
    );
    const button = screen.getByRole("link", {
      name: EN.COMPONENTS.LOGINBUTTON.TEXT,
    });
    expect(button).toHaveAttribute("href", ROUTES.LOGIN);
    fireEvent.click(button);
    expect(screen.getByText(EN.PAGES.LOGIN.TITLE)).toBeInTheDocument();
  });
});
