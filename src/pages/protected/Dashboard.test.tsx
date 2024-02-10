import {render, screen, waitFor} from "@testing-library/react";
import {EN} from "../../common/constants";
import * as layout from "../layout/Layout";
import Dashboard from "./Dashboard";

jest.mock("../layout/Layout", () => ({
  ...jest.requireActual("../layout/Layout"),
  useUser: jest.fn(),
}));

describe("Dashboard", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Dashboard should have title and not have user name", async () => {
    require("../layout/Layout").useUser.mockResolvedValue();
    render(<Dashboard />);
    expect(
      screen.getByRole("heading", {
        name: EN.PAGES.DASHBOARD.TITLE,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(`${EN.PAGES.DASHBOARD.WELCOME} ${LOGGEDUSER.name}`)).not.toBeInTheDocument();
  });

  test("Dashboard should have user name", async () => {
    require("../layout/Layout").useUser.mockReturnValue({userData: LOGGEDUSER});
    render(<Dashboard />);
    await waitFor(() => {
      expect(layout.useUser).toHaveBeenCalledTimes(1);
    });
    expect(
      screen.getByRole("heading", {
        name: EN.PAGES.DASHBOARD.TITLE,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(`${EN.PAGES.DASHBOARD.WELCOME} ${LOGGEDUSER.name}`)).toBeInTheDocument();
  });
});
