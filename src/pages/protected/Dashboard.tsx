import {EN} from "../../common/constants";
import {useAuth} from "../../context/AuthContext";
import {Title} from "../../components/layout";

const Dashboard = (): JSX.Element => {
  const {state} = useAuth();

  return (
    <section className="w-full">
      <Title title={EN.PAGES.DASHBOARD.TITLE} />
      <h1>{`${EN.PAGES.DASHBOARD.WELCOME} ${state.user?.name}`}</h1>
    </section>
  );
};

export default Dashboard;
