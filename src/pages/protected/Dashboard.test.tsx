import {screen} from "@testing-library/react";
import {EN} from "../../common/constants";
import {componentSetup, useAuthMock} from "../../tests-setup";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("Dashboard should have Dashboard text", async () => {
    useAuthMock.mockReturnValue({state: {user: LOGGEDUSER}});
    componentSetup({component: <Dashboard />});
    expect(
      screen.getByRole("heading", {
        name: EN.PAGES.DASHBOARD.TITLE,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(`${EN.PAGES.DASHBOARD.WELCOME} ${LOGGEDUSER.name}`)).toBeInTheDocument();
  });
});
