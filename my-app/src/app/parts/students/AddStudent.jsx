import { useState } from "react";

export const NewStudentForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [speciality, setSpeciality] = useState("");

  const onNameChange = (form) => setName(form.target.value);
  const onSurnameChange = (form) => setSurname(form.target.value);
  const onAgeChange = (form) => setAge(form.target.value);
  const onSpecialityChange = (form) => setSpeciality(form.target.value);

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
        <button type='button'>Save</button>
      </form>
    </div>
  );
};
