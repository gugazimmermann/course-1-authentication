import {useState} from "react";
import {Auth} from "../../../services";
import {type AccountPasswordValues} from "../../../common/interfaces/auth";
import {type AlertProps} from "../../../common/interfaces/components";
import {EN} from "../../../common/constants";
import {isUser} from "../../../common/helpers";
import {validatePassword} from "../../utils/validation";
import {Form, Input} from "../../../components/form";
import {Button, Card} from "../../../components";

const AccountPassword = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps>();
  const [values, setValues] = useState<AccountPasswordValues>({
    password: "",
    newpassword: "",
    repeatpassword: "",
  });

  const validate = (values: AccountPasswordValues): boolean => {
    if (!validatePassword(values.password, values.password, setAlert)) {
      setLoading(false);
      return false;
    }
    if (!validatePassword(values.newpassword, values.repeatpassword, setAlert)) {
      setLoading(false);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setAlert(undefined);
    if (!validate(values)) return;
    const response = await Auth.updatePassword(values);
    if (!isUser(response?.data)) {
      setAlert({
        type: "error",
        text: EN.AUTH.PASSWORDCHANGEERROR,
      });
    } else {
      setAlert({
        type: "success",
        text: EN.AUTH.PASSWORDCHANGESUCCESS,
      });
    }
    setLoading(false);
  };

  return (
    <Card title={EN.PAGES.ACCOUNT.CHANGEPASSWORD.TITLE}>
      <Form loading={loading} alert={alert} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <>
          <Input
            disabled={loading}
            required={true}
            type="password"
            label={EN.AUTH.CURRENTPASSWORD}
            placeholder={EN.AUTH.CURRENTPASSWORD}
            value="password"
            values={values}
            setValues={setValues}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              disabled={loading}
              required={true}
              type="password"
              label={EN.AUTH.NEWPASSWORD}
              placeholder={EN.AUTH.NEWPASSWORD}
              value="newpassword"
              values={values}
              setValues={setValues}
            />
            <Input
              disabled={loading}
              required={true}
              type="password"
              label={EN.AUTH.REPEATNEWPASSWORD}
              placeholder={EN.AUTH.REPEATNEWPASSWORD}
              value="repeatpassword"
              values={values}
              setValues={setValues}
            />
          </div>
          <div className="flex justify-end">
            <Button
              size="w-1/3"
              testid="account-password-submit-button"
              text={EN.PAGES.ACCOUNT.CHANGEPASSWORD.BUTTON}
              type="submit"
            />
          </div>
        </>
      </Form>
    </Card>
  );
};

export default AccountPassword;
