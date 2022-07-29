import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      
      setEmail("");
      setPassword("");
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center">
        <h1 className="mb-4 text-3xl font-bold">Create your account</h1>
        <p className="mb-4">
          Already registered?{" "}
          <Link
            to="/signin"
            className="text-[#6A0DAD] hover:text-[#550a8a] font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
      <div className="bg-white mx-4 py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[#6A0DAD] focus:ring-1 focus:ring-[#6A0DAD]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[#6A0DAD] focus:ring-1 focus:ring-[#6A0DAD]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#6A0DAD] hover:bg-[#550a8a] w-full rounded-md mx-auto font-medium my-6 px-6 py-3 text-white"
          >
            Submit
          </button>
          {error && <p className="text-[#ff0000]">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
