"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { updateForm, submitForm } from "@/lib/features/formSubmit/formSlice";
import FormInput from "./formInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateForm({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitForm(formData));
    router.push("/tree");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
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

export default SignupForm;
