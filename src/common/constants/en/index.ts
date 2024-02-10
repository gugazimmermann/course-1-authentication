const MENU = {
  HOME: "Home",
  BLOG: "Blog",
};

const NOMATCH = {
  TEXT: "Oops! Page not Found",
  BUTTON: "Back",
};

const HERO = {
  TITLE: "Learn React / Typescript",
  SUBTITLE: "in Action",
  CONTENT:
    "Learn how to develop a full-fledged app in React / Typescript with authentication system and tests covering all the code.",
};

const LOGINBUTTON = {
  TEXT: "Login",
};

const BLOG = {
  TITLE: "Now Playing",
  RELEASE: "Upcoming",
  BUTTON: "Back",
  NORESULT: "No results found.",
  ERROR: "An error occurred, please try again.",
};

const AUTH = {
  USERUNVERIFIED: "Email not verified.",
  USERUNAUTHORIZED: "Unauthorized, please try again.",
  EMAIL: "Email",
  EMAILERROR: "Invalid email.",
  EMAILNOTFOUND: "Email not found.",
  EMAILUNVERIFIED: "Email not verified.",
  PASSWORD: "Password",
  PASSWORDERROR: "Invalid password, passwords are either different or do not meet the minimum of 6 characters.",
  REPEATPASSWORD: "Repeat Password",
  CODE: "Code",
  CODEERROR: "Invalid code.",
  CODESENDED: "Code sent to",
  SENDCODEERROR: "Error sending the code, please try again.",
  NAME: "Name",
  NAMEERROR: "Invalid name, minimum of 3 characters required.",
  REGISTERERROR: "An error occurred while registering, please try again.",
  LINKFORGOTPASSWORD: "Forgot your password? Click here!",
  LINKREGISTER: "Don't have an account? Sign up now!",
  LINKALREDYREGISTERED: "Already have an account? Log in now!",
  LINKVERIFYEMAIL: "Click here to verify your email!",
  LINKBACKTOLOGIN: "Back to Login.",
};

const LOGIN = {
  TITLE: "Login",
  BUTTON: "Sign In",
};

const REGISTER = {
  TITLE: "New Registration",
  BUTTON: "Register",
};

const VERIFYEMAIL = {
  TITLE: "Verify Email",
  BUTTON: "Send Code",
  BUTTONRESEND: "Resend Code",
};

const FORGOTPASSWORD = {
  TITLE: "Forgot Password",
  BUTTON: "Receive Code",
};

const NEWPASSWORD = {
  TITLE: "New Password",
  BUTTON: "Send",
};

const DASHBOARD = {
  TITLE: "Dashboard",
  WELCOME: "Welcome,",
};

const EN = Object.freeze({
  LAYOUT: {
    MENU,
    NOMATCH,
  },
  COMPONENTS: {
    HERO,
    LOGINBUTTON,
  },
  PAGES: {
    BLOG,
    LOGIN,
    REGISTER,
    VERIFYEMAIL,
    FORGOTPASSWORD,
    NEWPASSWORD,
    DASHBOARD,
  },
  AUTH,
});

export default EN;
