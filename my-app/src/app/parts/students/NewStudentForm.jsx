import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentAdded } from "./studentsSlice";

export const NewStudentForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [speciality, setSpeciality] = useState("");
  const [teacher, setTeacher] = useState("");

  const onNameChange = (form) => setName(form.target.value);
  const onSurnameChange = (form) => setSurname(form.target.value);
  const onAgeChange = (form) => setAge(form.target.value);
  const onSpecialityChange = (form) => setSpeciality(form.target.value);
  const onTeacherChange = (form) => setTeacher(form.target.value);

  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);

  const onSaveClick = () => {
    if (name && surname && age && speciality) {
      dispatch(studentAdded(name, surname, age, speciality, teacherId));

      setName("");
      setSurname("");
      setAge(0);
      setSpeciality("");
      setTeacher("");
    }
  };

  return (
    <div>
      <h2>Add new student</h2>
      <form>
        <p>
          <label htmlFor='name'>Name: </label>
          <input
            id='name'
            name='name'
            value={name}
            onChange={onNameChange}
          ></input>
        </p>

        <p>
          <label htmlFor='surname'>Surname: </label>
          <input
            id='surname'
            name='surname'
            value={surname}
            onChange={onSurnameChange}
          ></input>
        </p>

        <p>
          <label htmlFor='age'>Age: </label>
          <input
            id='age'
            name='age'
            value={age}
            onChange={onAgeChange}
          ></input>
        </p>

        <p>
          <label htmlFor='speciality'>Speciality: </label>
          <input
            id='speciality'
            name='speciality'
            value={speciality}
            onChange={onSpecialityChange}
          ></input>
        </p>

        <p>
          <label htmlFor='teacher'>Teacher: </label>
          <input
            id='teacher'
            name='teacher'
            value={teacher}
            onChange={onTeacherChange}
          ></input>
        </p>

        <button
          type='button'
          onClick={onSaveClick}
        >
          Save
        </button>
      </form>
    </div>
  );
};
