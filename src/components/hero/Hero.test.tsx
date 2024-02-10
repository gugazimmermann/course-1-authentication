import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {EN} from "../../common/constants";
import Hero from "./Hero";

describe("Hero", () => {
  test("Hero render correctly", async () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(screen.getByText(EN.COMPONENTS.HERO.TITLE)).toBeInTheDocument();
    expect(screen.getByText(EN.COMPONENTS.HERO.SUBTITLE)).toBeInTheDocument();
    expect(screen.getByText(EN.COMPONENTS.HERO.CONTENT)).toBeInTheDocument();
    expect(screen.getByText(EN.COMPONENTS.LOGINBUTTON.TEXT)).toBeInTheDocument();
  });
});
