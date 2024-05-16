import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-4 pt-20">
      <form
        className=" my-4 flex flex-col justify-center gap-4 
        border shadow-sm shadow-slate-500 mx-auto
         md:w-3/5 lg:1/3 rounded-md px-6 py-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-medium text-pink-500 ">
          Contact Us
        </h1>

        <input
          className=" px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-sm text-red-600">{errors.name.message}</span>
        )}

        <input
          className=" px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
          type="email"
          placeholder="Enter your Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}

        <textarea
          className=" px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
          type="text"
          rows={7}
          placeholder="Enter your Message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.name && (
          <span className="text-sm text-red-600">{errors.message.message}</span>
        )}
        <button
          type="submit"
          className="mt-6 btn bg-pink-500 hover:bg-pink-700 text-white duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
