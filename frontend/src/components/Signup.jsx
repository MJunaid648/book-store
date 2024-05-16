import { useForm } from "react-hook-form";

const Signup = ({ showLogin, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box  dark:bg-slate-800 ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2 ">
              {/* Name */}
              <label htmlFor="name">Name</label> <br />
              <input
                className=" w-full px-3 py-1 border rounded-md outline-none  dark:bg-slate-800 "
                type="text"
                id="name"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 25,
                    message: "Must not be more than 25 characters",
                  },
                })}
              />{" "}
              <br />{" "}
              {errors.name && (
                <span className="text-[14px] text-red-600 ">
                  {errors.name.message}
                </span>
              )}
              <br /> <br />
              {/* Email */}
              <label htmlFor="email1">Email</label> <br />
              <input
                className=" w-full px-3 py-1 border rounded-md outline-none  dark:bg-slate-800"
                type="email"
                id="email1"
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
              />{" "}
              <br />
              {errors.email && (
                <span className="text-[14px] text-red-600 ">
                  {errors.email.message}
                </span>
              )}
              <br /> <br />
              {/* Password */}
              <label htmlFor="password1">Password</label> <br />
              <input
                className=" w-full px-3 py-1 border rounded-md outline-none  dark:bg-slate-800"
                type="password"
                id="password1"
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
              />{" "}
              <br />{" "}
              {errors.password && (
                <span className="text-[14px] text-red-600">
                  {errors.password.message}
                </span>
              )}
              {/* Button */}
              <div className="flex flex-row justify-between gap-4 ">
                <button className="btn bg-pink-500 hover:bg-pink-700 text-white duration-200 mt-4 align-self-end  ">
                  Sign up
                </button>
                <p className="align-self-end mt-auto ">
                  Already have an account?{" "}
                  <span
                    onClick={() => showLogin("my_modal_1")}
                    className="cursor-pointer text-blue-500 underline"
                  >
                    Login
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

export default Signup;
