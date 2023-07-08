import InputField from "components/fields/InputField";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

export default function SignUp() {
  let [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    recheckPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Enter Your Password")
      .min(6, "Password must be at least 6 characters long"),
    recheckPassword: Yup.string()
      .required("Enter Your Password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      setLoading(false);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex  h-full w-full items-center justify-center px-2 md:mx-0 md:mt-4 md:px-0  lg:items-center lg:justify-start">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign Up
            </h4>
            <p className="ml-1 text-base text-gray-600 md:mb-9">
              Enter your name, email, and password to sign up!
            </p>
            {/* Name */}
            <InputField
              variant="auth"
              name="name"
              extra="my-2"
              label="Name*"
              placeholder="Write Your Name"
              id="name"
              type="text"
              error={formikProps.touched.name && formikProps.errors.name}
            />
            <ErrorMessage
              name="name"
              component="p"
              className="ml-2 text-sm text-red-500"
            />
            {/* Email */}
            <InputField
              variant="auth"
              extra="my-2"
              label="Email*"
              placeholder="Write Your Email"
              id="email"
              type="email"
              name="email"
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
              extra="my-2"
              label="Password*"
              placeholder="New Password"
              type="password"
              id="password"
              name="password"
              error={
                formikProps.touched.password && formikProps.errors.password
              }
            />
            <ErrorMessage
              name="password"
              component="p"
              className="ml-2 text-sm text-red-500"
            />

            {/*  Re-check Password */}
            <InputField
              variant="auth"
              extra="my-2"
              label="Re-Check Password*"
              placeholder="Re-Check Password"
              type="password"
              id="recheckPassword"
              name="recheckPassword"
              error={
                formikProps.touched.recheckPassword &&
                formikProps.errors.recheckPassword
              }
            />
            <ErrorMessage
              name="recheckPassword"
              component="p"
              className="ml-2 text-sm text-red-500"
            />

            <button
              disabled={formikProps.isSubmitting}
              type="submit"
              className={`linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 dark:bg-brand-400 ${
                !formikProps.isValid
                  ? ""
                  : "hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
              }`}
            >
              {loading && (
                <span className="flex items-center justify-center gap-2">
                  Signing Up
                  {loading && <Oval height="22" width="22" color="white" />}
                </span>
              )}
              {!loading && <span>Sign Up</span>}
            </button>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
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
        )}
      </Formik>
    </div>
  );
}
