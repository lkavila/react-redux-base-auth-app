import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel";
import Input from "../../../Components/Input";
import CustomButton from "../../../Components/Button";

const LogIn = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2 place-items-center">
      <div className="min-h-full flex items-center justify-center ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or if you dont have an account,{' '}
              <Link to="/signup" className="font-medium text-azul1 hover:text-azul2">register here</Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-1">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="focus:ring-azul1 focus:border-azul2 focus:z-10 sm:text-sm rounded-lg"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-azul1 hover:text-azul2">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <CustomButton
                type="submit"
                className="text-gray-50 bg-azul2 hover:bg-azul3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azul1"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Sign in
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default LogIn;