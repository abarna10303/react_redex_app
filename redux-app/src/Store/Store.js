import { configureStore } from "@reduxjs/toolkit";
import slice from "../Slice/Slice";
export const store = configureStore({
  reducer: {
    sample: slice,
  },
});
