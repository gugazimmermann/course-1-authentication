import {type AlertProps} from "../../common/interfaces/components";
import {EN} from "../../common/constants";
import {ValidadeForm} from "../../common/helpers";

export const validateEmail = (email: string, setAlert: (alert: AlertProps) => void): boolean => {
  if (!ValidadeForm.isValidEmail(email)) {
    setAlert({
      type: "error",
      text: EN.AUTH.EMAILERROR,
    });
    return false;
  }
  return true;
};

export const validateCode = (code: string, setAlert: (alert: AlertProps) => void): boolean => {
  if (!ValidadeForm.isValidCode(code)) {
    setAlert({
      type: "error",
      text: EN.AUTH.CODEERROR,
    });
    return false;
  }
  return true;
};

export const validatePassword = (
  password: string,
  repeatPassword: string,
  setAlert: (alert: AlertProps) => void,
): boolean => {
  if (!ValidadeForm.isValidPassword(password, repeatPassword)) {
    setAlert({
      type: "error",
      text: EN.AUTH.PASSWORDERROR,
    });
    return false;
  }
  return true;
};

export const validateName = (name: string, setAlert: (alert: AlertProps) => void): boolean => {
  if (!ValidadeForm.isValidName(name)) {
    setAlert({
      type: "error",
      text: EN.AUTH.NAMEERROR,
    });
    return false;
  }
  return true;
};
