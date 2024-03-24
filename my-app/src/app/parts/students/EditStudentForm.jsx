import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentUpdated } from "./studentsSlice.js";
import { useNavigate, useParams } from "react-router-dom";

export const EditStudentForm = () => {
  let params = useParams();
  const { studentId } = params;

  const student = useSelector((state) =>
    state.students.find((student) => student.id == studentId)
  );

  const [name, setName] = useState(student.name);
  const [surname, setSurname] = useState(student.surname);
  const [age, setAge] = useState(student.age);
  const [speciality, setSpeciality] = useState(student.speciality);

  const onNameChange = (form) => setName(form.target.value);
  const onSurnameChange = (form) => setSurname(form.target.value);
  const onAgeChange = (form) => {
    setAge(form.target.value);
  };
  const onSpecialityChange = (form) => setSpeciality(form.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveClick = () => {
    if (name && surname && age && speciality) {
      dispatch(
        studentUpdated({
          id: studentId,
          name,
          surname,
          age,
          speciality,
        })
      );

      navigate(`/students/${studentId}`);
    }
  };

  return (
    <div>
      <h2>Edit student</h2>
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
