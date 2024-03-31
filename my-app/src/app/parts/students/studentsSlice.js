import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    studentAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, surname, age, speciality, teacherId) {
        return {
          payload: {
            id: nanoid(),
            name,
            surname,
            age,
            speciality,
            teacher: teacherId,
          },
        };
      },
    },
    studentUpdated(state, action) {
      const { id, name, surname, age, speciality } = action.payload;
      const pickedStudent = state.find((student) => student.id == id);

      if (pickedStudent) {
        pickedStudent.name = name;
        pickedStudent.surname = surname;
        pickedStudent.age = age;
        pickedStudent.speciality = speciality;
      }
    },
    voteClicked(state, action) {
      const [studentId, vote] = action.payload;
      const currentStudent = state.find((student) => student.id == studentId);

      if (currentStudent) {
        currentStudent.votes[vote]++;
      }
    },
  },
});

export const { studentAdded, studentUpdated, voteClicked } =
  studentsSlice.actions;
export default studentsSlice.reducer;
