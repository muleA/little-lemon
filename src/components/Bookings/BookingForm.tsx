import { useFormik } from 'formik';
const MyMantineForm = () => {
  const formik = useFormik({
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
  });
  

  // Replace the formik.handleSubmit with your custom submit handler
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formik.values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-1/2 mx-auto text-center">
      <div className="flex flex-col space-y-6">
        <label htmlFor="date" className="text-lg font-medium">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="border rounded-md p-2 flex flex-col gap-2 cursor-pointer"
          placeholder="YYYY-MM-DD"
          value={formik.values.date}
          onChange={(e) => formik.setFieldValue('date', e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="time" className="text-lg font-medium">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          className="border rounded-md p-2 flex flex-col gap-2 cursor-pointer"
          placeholder="Time"
          value={formik.values.time}
          onChange={(e) => formik.setFieldValue('time', e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="numberOfGuests" className="text-lg font-medium">
          Number of Guests
        </label>
        <input
          id="numberOfGuests"
          name="numberOfGuests"
          type="number"
          className="border rounded-md p-2 flex flex-col gap-2 cursor-pointer"
          required
          value={formik.values.numberOfGuests}
          onChange={(e) => formik.setFieldValue('numberOfGuests', parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="occasion" className="text-lg font-medium">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          className="border rounded-md p-2"
          required
          value={formik.values.occasion}
          onChange={(e) => formik.setFieldValue('occasion', e.target.value)}
        >
          <option value="">Select an occasion</option>
          {/* Add your occasion options here */}
        </select>
      </div>

      <button
        type="submit"
        disabled={!formik.isValid}
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
      >
        Make your reservation
      </button>
    </form>
  );
};

export default MyMantineForm;
