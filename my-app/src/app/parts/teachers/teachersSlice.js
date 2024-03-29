import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Inspector Gadget", subject: "Math" },
  { id: 1, name: "Lady Bug", subject: "Biology" },
  { id: 2, name: "Splinter", subject: "History" },
];

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
});

export default teachersSlice.reducer;
