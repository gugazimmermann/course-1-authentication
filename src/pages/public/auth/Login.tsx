import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {type LoginValues} from "../../../common/interfaces/auth";
import {type AlertProps} from "../../../common/interfaces/components";
import {EN, ROUTES} from "../../../common/constants";
import {Auth} from "../../../services";
import {isUser} from "../../../common/helpers";
import {EmailIcon, PasswordIcon} from "../../../icons";
import {AuthLink} from "../../../components";
import {validateEmail} from "../../utils/validation";
import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const {email} = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps>();
  const [values, setValues] = useState<LoginValues>({
    email: email ?? "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setAlert(undefined);
    if (!validateEmail(values.email, setAlert)) {
      setLoading(false);
      return;
    }
    const response = await Auth.login(values);
    if (!isUser(response?.data)) {
      setAlert({
        type: "error",
        text: response.data === "Unverified" ? EN.AUTH.USERUNVERIFIED : EN.AUTH.USERUNAUTHORIZED,
      });
    } else {
      localStorage.setItem("token", String(response.data.token));
      navigate(ROUTES.DASHBOARD);
    }
    setLoading(false);
  };

  return (
    <AuthLayout title={EN.PAGES.LOGIN.TITLE}>
      <AuthForm<LoginValues>
        loading={loading}
        alert={alert}
        submitText={EN.PAGES.LOGIN.BUTTON}
        onSubmit={async e => {
          await handleSubmit(e);
        }}
        values={values}
        setValues={setValues}
        inputs={[
          {
            required: true,
            autocomplete: "email",
            type: "email",
            placeholder: EN.AUTH.EMAIL,
            icon: <EmailIcon />,
            value: "email",
          },
          {
            required: true,
            type: "password",
            placeholder: EN.AUTH.PASSWORD,
            icon: <PasswordIcon />,
            value: "password",
          },
        ]}>
        <>
          <AuthLink route={ROUTES.FORGOT_PASSWORD} text={EN.AUTH.LINKFORGOTPASSWORD} />
          <AuthLink route={ROUTES.REGISTER} text={EN.AUTH.LINKREGISTER} />
          <AuthLink route={ROUTES.VERIFY_EMAIL} text={EN.AUTH.LINKVERIFYEMAIL} />
        </>
      </AuthForm>
    </AuthLayout>
  );
};

export default Login;
