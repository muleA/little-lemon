

const MyMaterialUIForm = () => {
 /*  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      numberOfGuests: 0,
      occasion: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  }); */

  // Replace the formik.handleSubmit with your custom submit handler
/*   const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formik.values);
  }; */

  return (
   /*  <form
      onSubmit={handleSubmit}
      classNameName="w-1/2 mx-auto text-center"
    >
      <div classNameName="flex flex-col space-y-0">
        <label htmlFor="date" classNameName="text-lg font-medium">
          Date
        </label>
        <TextField
          id="date"
          name="date"
          type="date"
          variant="outlined"
          value={formik.values.date}
          onChange={(e) => formik.setFieldValue('date', e.target.value)}
          required
        />
      </div>

      <div classNameName="flex flex-col">
        <label htmlFor="time" classNameName="text-lg font-medium">
          Time
        </label>
        <TextField
          type="time"
          id="time"
          name="time"
          variant="outlined"
          value={formik.values.time}
          onChange={(e) => formik.setFieldValue('time', e.target.value)}
          required
        />
      </div>

      <div classNameName="flex flex-col">
        <label htmlFor="numberOfGuests" classNameName="text-lg font-medium">
          Number of Guests
        </label>
        <TextField
          id="numberOfGuests"
          name="numberOfGuests"
          type="number"
          variant="outlined"
          value={formik.values.numberOfGuests}
          onChange={(e) =>
            formik.setFieldValue('numberOfGuests', parseInt(e.target.value))
          }
          required
        />
      </div>

      <div classNameName="flex flex-col">
        <label htmlFor="occasion" classNameName="text-lg font-medium">
          Occasion
        </label>
        <Select
          id="occasion"
          name="occasion"
          variant="outlined"
          value={formik.values.occasion}
          onChange={(e) => formik.setFieldValue('occasion', e.target.value)}
          required
        >
          <MenuItem value="">
            <em>Select an occasion</em>
          </MenuItem>
          {/* Add your occasion options here *
        </Select>
      </div>

      <Button
        type="submit"
        disabled={!formik.isValid}
        variant="contained"
        classNameName="inline-block mt-4 rounded-full hover:bg-grayBackground hover:text-white hover:border-2	mt-8 px-4 py-2 bg-yellow-400 text-black border border-transparent hover:border-yellow-400 focus:border-yellow-400"
        >
        Make your reservation
      </Button>
    </form> */
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          How many guest are you bringing?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Are you coming to the event?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default MyMaterialUIForm;
