import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Phil",
    surname: "Geek",
    age: 20,
    speciality: "history",
  },
  {
    id: 2,
    name: "Anna",
    surname: "Klee",
    age: 25,
    speciality: "history",
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    studentAdded(state, action) {
      state.push(action.payload);
    },
    studentUpdated(state, action) {
      const { id, name, surname, age, speciality } = action.payload;
      const pickedStudent = state.find((student) => student.id === id);

      if (pickedStudent) {
        pickedStudent.name = name;
        pickedStudent.surname = surname;
        pickedStudent.age = age;
        pickedStudent.speciality = speciality;
      }
    },
  },
});

export const { studentAdded, studentUpdated } = studentsSlice.actions;
export default studentsSlice.reducer;
