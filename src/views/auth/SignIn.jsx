import InputField from "components/fields/InputField";
// import Checkbox from "components/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn() {
  const navigate = useNavigate();

  let [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setTimeout(() => {
      const user = storedUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        navigate("/admin/default");
        localStorage.setItem("userLoggedIn", "true");
      } else {
        setErrorMessage("You have entered an invalid email or password.");
        setSubmitting(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }

      setLoading(false);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <div className="flex  h-full w-full items-center justify-center px-2 md:mx-0 md:mt-16 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            {/* errormsg */}
            {errorMessage && (
              <p className="ml-2 text-red-500">{errorMessage}</p>
            )}
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simple.com"
              id="email"
              name="email"
              type="email"
              error={formikProps.touched.email && formikProps.errors.email}
            />
            <ErrorMessage
              name="email"
              component="p"
              className="ml-2 text-sm text-red-500"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder=""
              id="password"
              name="password"
              type="password"
              disabled={!formikProps.values.email || !!formikProps.errors.email}
            />

            {/* Checkbox */}
            {/* <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
            </div> */}
            <div>
              <button
                type="submit"
                className={`linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 dark:bg-brand-400 ${
                  !formikProps.isValid
                    ? ""
                    : "hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                }`}
                disabled={!formikProps.isValid}
              >
                {loading && (
                  <span className="flex items-center justify-center gap-2">
                    Signing In
                    {loading && <Oval height="22" width="22" color="white" />}
                  </span>
                )}
                {!loading && <span>Sign In</span>}
              </button>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <Link
                to="/auth/sign-up"
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Create an account
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
