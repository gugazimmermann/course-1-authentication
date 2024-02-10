import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {EN} from "../../../common/constants";
import Home from "./Home";

describe("Home", () => {
  test("Home should have Hero", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByText(EN.COMPONENTS.HERO.TITLE)).toBeInTheDocument();
  });
});
