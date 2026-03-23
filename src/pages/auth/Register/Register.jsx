import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const handleRegister = (data) => {
    console.log("after register", data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="space-y-4  ">
      <div className="">
        <h1 className="text-3xl font-black space-y-4">Create an Account</h1>
        <p>Register with ZapShift</p>
      </div>
      {/*form  */}
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          {/* <label className="label text-lg">Name</label> */}
          {/* name field */}
          {/* <input
            {...register("name", { required: true })}
            type="text"
            className="input w-full text-lg"
            placeholder="Name "
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-lg">name is required.</p>
          )} */}
          <label className="label text-lg">Email</label>
          {/* email field */}
          <input
            {...register("email", { required: true })}
            type="email"
            className="input w-full text-lg"
            placeholder="Email "
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-lg">email is required.</p>
          )}
          <label className="label text-lg">Password</label>
          {/* password field */}
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 14,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
            })}
            type="password"
            className="input w-full text-lg"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-lg">password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-lg">
              password must be 6 characters or long.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-lg">
              password must have at least one uppercase, one lowercase and one
              special charecters.
            </p>
          )}
          <div>
            <a className="link link-hover text-lg">Forgot password?</a>
          </div>
          <button className="btnsBg text-lg">Register</button>
          <p className="text-lg">
            Don’t have any account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:to-blue-600 underline">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Register;
