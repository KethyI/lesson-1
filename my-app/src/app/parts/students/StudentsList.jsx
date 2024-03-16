import { useSelector } from "react-redux";

export const StudentsList = () => {
  const students = useSelector((state) => state.students);

  const showStudents = students.map((students) => (
    <div key={students.id}>
      <h3>
        {students.name} {students.surname}
      </h3>
      <p>Age: {students.age}</p>
      <p>Speciality: {students.speciality}</p>
    </div>
  ));

  return (
    <div>
      <h2>Students</h2>
      {showStudents}
    </div>
  );
};
