/* eslint-disable @typescript-eslint/no-explicit-any */
import Brand from "@components/Form/Brand";
import Button from "@components/Form/Button";
import GoogleSignIn from "@components/Form/GoogleSignIn";
import TextField from "@components/Form/TextField";
import useAuth from "@libs/hooks/use-auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignInScreen = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const signInUser = useAuth();
  // handle change
  const handleChange = (e: { target: any }) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  //handle submit form
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signInUser(userInput.email, userInput.password);
  };

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: `${userInput.password}`,
      name: "password",
    },
  ];
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <Brand />
        {/* sign up form  */}
        <form className="bg-white w-96 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>

          <div className="flex flex-col space-y-6">
            {Inputs.map((input) => (
              <TextField
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={handleChange}
              />
            ))}
          </div>
          <Button text="Sign In" />
          <Link to="/signup">
            <p className="text-base text-primary-900 text-center my-2 hover:underline">
              Need an account ?
            </p>
          </Link>

          <GoogleSignIn text="Sign In With Google" />
        </form>
      </div>
    </main>
  );
};

export default SignInScreen;
