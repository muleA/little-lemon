/* eslint-disable @typescript-eslint/no-explicit-any */

const Button = ({ text }: any) => {
  return (
    <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
      {text}
    </button>
  );
};

export default Button;
