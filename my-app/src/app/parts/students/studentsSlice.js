import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Phil",
    surname: "Geek",
    age: "20",
    speciality: "history",
  },
  {
    id: "2",
    name: "Anna",
    surname: "Klee",
    age: "25",
    speciality: "history",
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
});

export default studentsSlice.reducer;
