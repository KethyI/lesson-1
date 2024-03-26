import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Inspector Gadget" },
  { id: 1, name: "Lady Bug" },
  { id: 2, name: "Splinter" },
  { id: 3, name: "Professor Mars" },
];

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
});

export default teachersSlice.reducer;
