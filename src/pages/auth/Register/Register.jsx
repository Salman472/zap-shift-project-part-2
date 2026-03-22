import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const handleRegister=(data)=>{
    console.log('after register', data);
  }
  return (
    <div className="space-y-4  ">
      <div className="">
        <h1 className="text-3xl font-black space-y-4">Welcome Back</h1>
        <p>Login with ZapShift</p>
      </div>
      {/*form  */}
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label text-lg">Email</label>
          {/* email field */}
          <input
            {...register("email", {required:true})}
            type="email"
            className="input w-full"
            placeholder="Email text-lg"
          />
          {
            errors.email?.type === 'required' && <p className="text-red-500 text-lg">email is required.</p>
          }
          <label className="label text-lg">Password</label>
          {/* password field */}
          <input
            {...register("password",{required:true, minLength:6, maxLength:14})}
            type="password"
            className="input w-full text-lg"
            placeholder="Password"
          />
          {
            errors.password?.type === "required" &&<p className="text-red-500 text-lg">password is required.</p>
          }
          {
            errors.password?.type === "minLength" &&<p className="text-red-500 text-lg">password must be 6 characters or long.</p>
          }
          <div>
            <a className="link link-hover text-lg">Forgot password?</a>
          </div>
          <button className="btnsBg text-lg">Login</button>
          <p className="text-lg">
            Don’t have any account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:to-blue-600 ">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
