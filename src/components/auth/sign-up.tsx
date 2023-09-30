/* eslint-disable @typescript-eslint/no-explicit-any */
import Brand from "@components/Form/Brand";
import Button from "@components/Form/Button";
import GoogleSignIn from "@components/Form/GoogleSignIn";
import TextField from "@components/Form/TextField";
import useAuth from "@libs/hooks/use-auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
const signUpUser=useAuth()
  //handle change
  const handleChange = (e: any) => {
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
          await signUpUser(userInput.email, userInput.password ,  userInput.name,userInput.image )
     
  };

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Name",
      value: `${userInput.name}`,
      name: "name",
    },
    {
      id: 2,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email",
    },
     {
      id: 3,
      type: "text",
      placeholder: "Profile Picture Link",
      value: `${userInput.image}`,
      name: "image",
    }, 
    {
      id: 4,
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
        <form
          className="bg-white w-96 mt-2 p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
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
          <Button text="Sign Up" />
          <Link to="/signin">
            <p className="text-base text-primary-900 text-center my-2 hover:underline">
              Already have an account ?
            </p>
          </Link>

          <GoogleSignIn text="Sign Up With Google" />
        </form>
      </div>
    </main>
  );
};

export default SignUpScreen;
