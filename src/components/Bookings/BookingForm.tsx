import React from "react";
import { useFormik } from "formik";
import { TextInput } from "@mantine/core";
import * as Yup from "yup";
import { occasions } from "@libs/utils/occassions";

interface BookingFormProps {
  availableTimes: string[];
  submitData: (values: FormValues) => void;
}

interface FormValues {
  date: string;
  time: string;
  numberOfGuests: number;
  occasion: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  submitData,
}) => {
  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date must be today or later"),
    time: Yup.string().required("Time is required"),
    numberOfGuests: Yup.number()
      .required("Number of guests is required")
      .min(1, "Number of guests must be at least 1")
      .max(10, "Number of guests cannot exceed 10"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      date: "",
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitData(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        label="Date"
        id="date"
        name="date"
        placeholder="YYYY-MM-DD"
        value={formik.values.date}
        onChange={formik.handleChange}
        required
        withAsterisk
        error={formik.touched.date && Boolean(formik.errors.date)}
      />

      <TextInput
        label="Time"
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        required
        withAsterisk
        error={formik.touched.time && Boolean(formik.errors.time)}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </TextInput>

      <TextInput
        label="Number of guests"
        id="numberOfGuests"
        name="numberOfGuests"
        type="number"
        required
        withAsterisk
        value={formik.values.numberOfGuests}
        onChange={formik.handleChange}
        error={
          formik.touched.numberOfGuests && Boolean(formik.errors.numberOfGuests)
        }
      />

      <TextInput
        label="Occasion"
        id="occasion"
        name="occasion"
        required
        withAsterisk
        value={formik.values.occasion}
        onChange={formik.handleChange}
        error={formik.touched.occasion && Boolean(formik.errors.occasion)}
      >
        {occasions?.map((occasion) => (
          <option key={occasion.value} value={occasion.value}>
            {occasion.label}
          </option>
        ))}
      </TextInput>

      <button type="submit" disabled={!formik.isValid}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
