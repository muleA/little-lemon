/* eslint-disable @typescript-eslint/no-explicit-any */

const TextField = ({ ...rest }: any) => {
  return (
    <>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
      />
    </>
  );
};

export default TextField;
