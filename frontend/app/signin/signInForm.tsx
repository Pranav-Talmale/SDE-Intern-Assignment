"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { updateForm, submitForm } from "@/lib/features/formSubmit/formSlice";
import FormInput from "./formInput";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateForm({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitForm(formData));
    // Handle additional form submission logic here if needed
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignInForm;
