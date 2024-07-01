import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/lib/createAppSlice";

interface FormState {
  name: string;
  email: string;
  password: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
};

export const formSlice = createAppSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof FormState] = value;
    },
    submitForm: (state, action: PayloadAction<FormState>) => {
      // Handle form submission logic here, e.g., send data to a server
      console.log("Form submitted", action.payload);
    },
  },
});

export const { updateForm, submitForm } = formSlice.actions;
export default formSlice.reducer;
