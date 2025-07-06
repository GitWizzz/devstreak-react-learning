import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("username is required"),
  email: yup.string().required("email is required"),
  channel: yup.string().required("channel is required"),
});

function LoginForm() {
  type FormValues = {
    username: string;
    email: string;
    channel: string;
    social: {
      twitter?: string;
      facebook?: string;
    };
    phoneNumber: string[];
    age: number;
  };

  const form = useForm<FormValues>({
    defaultValues: {
      username: "shivam",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumber: ["", ""],
      age: 0,
    },
  });
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("you clicked submit", data);
  };

  const watchValue = watch("username");

  return (
    <div className="flex justify-center text-black items-center  bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login Form</h2>
        <h1>name: {watchValue}</h1>
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.username?.message}
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (value) => {
                  return (
                    value !== "admin@example.com" || "This email is not allowed"
                  );
                },
                notBLacklisted: (value) => {
                  return (
                    value !== "shivam@gmail.com" || "This email is blacklisted"
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "error message already exist";
                },
              },
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="channel" className="block mb-1 font-medium">
            Channel
          </label>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel is Required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">{errors.channel?.message}</p>
        </div>

        <div>
          <label htmlFor="social.twitter" className="block mb-1 font-medium">
            Twitter
          </label>
          <input
            type="text"
            id="social.twitter"
            {...register("social.twitter")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="social.facebook" className="block mb-1 font-medium">
            Facebook
          </label>
          <input
            type="text"
            id="social.facebook"
            {...register("social.facebook")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block mb-1 font-medium">
            Primary Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber.0", {
              required: "Phone Number is Required",
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block mb-1 font-medium">
            Secondary Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber.1", {
              required: "Phone Number is Required",
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div>
          <label htmlFor="age" className="block mb-1 font-medium">
            age
          </label>
          <input
            type="date"
            id="age"
            {...register("age", {
              required: {
                value: true,
                message: "age is required",
              },
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      <DevTool control={control} />
    </div>
  );
}

export default LoginForm;
