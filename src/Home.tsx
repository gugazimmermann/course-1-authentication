import {Link} from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen bg-white">
      <div>
        <header className="w-full py-2 px-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <Link to="/" className="flex flex-row items-center">
            <img className="w-auto h-8 mr-2" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
            <span className="text-xl font-bold">Course 1 - Authentication</span>
          </Link>
          <nav className="mt-4 sm:mt-0 flex flex-row gap-8">
            <Link to="/" className="transition-colors duration-300 transform hover:text-warning-500">
              Home
            </Link>
            <Link to="/blog" className="transition-colors duration-300 transform hover:text-warning-500">
              Blog
            </Link>
            <Link to="/entrar" className="transition-colors duration-300 transform hover:text-warning-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </Link>
          </nav>
        </header>
        <hr className="border-background-300" />
      </div>
      <main className="flex flex-grow flex-col items-center justify-start p-4">
        <section className="w-full">
          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row items-center md:w-4/5">
              <div className="sm:w-1/2 text-center md:text-left">
                <h1 className="text-xl sm:text-3xl font-semibold">
                  Learn React / Typescript <span className="text-blue-500">in Action</span>
                </h1>
                <p className="my-4">
                  Learn how to develop a full-fledged app in React / Typescript with authentication system and tests
                  covering all the code.
                </p>
                <Link
                  to="/entrar"
                  className="px-4 py-2 mt-2 text-sm tracking-wider text-white bg-secondary-500 rounded-lg uppercase transition-colors duration-300 transform hover:bg-primary-500 focus:outline-none focus:bg-primary-500">
                  Login
                </Link>
              </div>
              <div className="sm:w-1/2 mt-4 sm:mt-0">
                <img className="w-full h-auto" src={process.env.PUBLIC_URL + "/images/hero.png"} alt="hero" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <hr className="border-background-300" />
        <div className="p-2 flex flex-col items-center text-center">
          <Link to="/" className="flex flex-row items-center">
            <span className="text-xl font-bold">Course 1 - Authentication</span>
          </Link>
          <p className="mt-2">Learn React / Typescript in Action</p>
          <Link
            to="/entrar"
            className="px-4 py-2 mt-2 text-sm tracking-wider text-white bg-secondary-500 rounded-lg uppercase transition-colors duration-300 transform hover:bg-primary-500 focus:outline-none focus:bg-primary-500">
            Login
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
