import InputField from "components/fields/InputField";
import { Link } from "react-router-dom";
import {
  Formik,
  Form,
  // ErrorMessage
} from "formik";
// import * as Yup from "yup";

export default function SignUp() {
  return (
    <Formik>
      <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign up section */}
        <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign Up
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your name , email and password to sign up!
          </p>

          {/* Name */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Name*"
            placeholder="Write Your Name"
            id="name"
            type="text"
          />
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="Write Your Email"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="New Password"
            id="password"
            type="password"
          />
          {/*  Re-check Password */}
          <InputField
            variant="auth"
            extra="mb-2"
            label="Re-Check Password*"
            placeholder="Re-Check Password"
            id="re-checkpassword"
            type="re-checkpassword"
          />

          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign Up
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Already have an account?
            </span>
            <Link
              to="/auth/sign-in"
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Sign In
            </Link>
          </div>
        </Form>
      </div>
    </Formik>
  );
}
