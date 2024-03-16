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
      <form></form>
    </div>
  );
};
