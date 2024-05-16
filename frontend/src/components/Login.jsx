import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ showSignup, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("data", data);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box dark:bg-slate-800">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2 ">
              {/* Email */}
              <label htmlFor="email">Email</label> <br />
              <input
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-800"
                type="text"
                id="email"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 30,
                    message: "Must not be more than 30 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-[14px] text-red-600 ">
                  {errors.email.message}
                </span>
              )}
              <br /> <br />
              {/* Password */}
              <label htmlFor="password">Password</label> <br />
              <input
                className=" w-full px-3 py-1 border rounded-md outline-none  dark:bg-slate-800"
                type="password"
                id="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 10,
                    message: "Must be at least 10 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                    message:
                      "Must contain at least one uppercase letter, one special character, and one digit",
                  },
                })}
              />
              {errors.password && (
                <span className="text-[14px] text-red-600">
                  {errors.password.message}
                </span>
              )}
              {/* Button */}
              <div className="flex flex-row justify-between gap-4 ">
                <button
                  type="submit"
                  className="btn bg-pink-500 hover:bg-pink-700 text-white duration-200 mt-4 align-self-end  "
                >
                  Login
                </button>
                <p className="align-self-end mt-auto ">
                  Not registered?{" "}
                  <span
                    onClick={() => showSignup("my_modal_2")}
                    className="cursor-pointer text-blue-500 underline"
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
