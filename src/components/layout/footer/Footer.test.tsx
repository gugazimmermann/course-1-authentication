import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {type FooterProps} from "../../../common/interfaces/components";
import {EN} from "../../../common/constants";
import Footer from "./Footer";

describe("Footer", () => {
  const setupComponent = (props: FooterProps = {}): void => {
    render(
      <MemoryRouter>
        <Footer {...props} />
      </MemoryRouter>,
    );
  };

  test("Footer should have text, LoginButton, and should not have image", async () => {
    setupComponent();
    expect(screen.getByText(`${EN.COMPONENTS.HERO.TITLE} ${EN.COMPONENTS.HERO.SUBTITLE}`)).toBeInTheDocument();
    expect(screen.getByText(String(process.env.REACT_APP_SITE_TITLE))).toBeInTheDocument();
    expect(screen.getByText(EN.COMPONENTS.LOGINBUTTON.TEXT)).toBeInTheDocument();
    expect(screen.queryByAltText("Logo")).toBeNull();
  });

  test("Footer should have image and not have LoginButton", async () => {
    setupComponent({
      image: true,
      user: LOGGEDUSER,
    });
    expect(screen.queryByText(EN.COMPONENTS.LOGINBUTTON.TEXT)).not.toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });
});
