import {EN} from "../../../common/constants";
import Logo from "../logo/Logo";
import LoginButton from "../../button/LoginButton";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <hr className="border-background-300" />
      <div className="p-2 flex flex-col items-center text-center">
        <Logo image={false} />
        <p className="mt-2">{`${EN.COMPONENTS.HERO.TITLE} ${EN.COMPONENTS.HERO.SUBTITLE}`}</p>
        <LoginButton />
      </div>
    </footer>
  );
};

export default Footer;
