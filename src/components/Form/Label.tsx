/* eslint-disable @typescript-eslint/no-explicit-any */

const Label = ({ text, ...rest }: any) => {
  return (
    <label {...rest} htmlFor="title" className="text-gray-500 poppins">
      {text}*
    </label>
  );
};

export default Label;
