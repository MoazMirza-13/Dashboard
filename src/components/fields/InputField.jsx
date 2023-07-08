import React from "react";
import { Field } from "formik";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function InputField(props) {
  const { label, id, extra, type, placeholder, variant, disabled } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <Field
          disabled={disabled}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none focus:border-brand-600 dark:focus:!border-brand-400
          ${
            props.error
              ? "!border-red-500 dark:!border-red-500"
              : "border-gray-200"
          }
          ${
            disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : "border-gray-200 dark:border-white/10 dark:text-white"
          }
           dark:border-white/10 dark:text-white
          `}
        />
        {props.error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            <AiOutlineExclamationCircle className="text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
