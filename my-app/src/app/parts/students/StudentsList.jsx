import { useSelector } from "react-redux";
import { NewStudentForm } from "./NewStudentForm";

export const StudentsList = () => {
  const students = useSelector((state) => state.students);

  const showStudents = students.map((students) => (
    <div
      key={students.id}
      className='students-list'
    >
      <h3>
        {students.name} {students.surname}
      </h3>
      <p>Age: {students.age}</p>
      <p>Speciality: {students.speciality}</p>
    </div>
  ));

  return (
    <div>
      <NewStudentForm />
      <div>
        <h2>Students</h2>
        {showStudents}
      </div>
    </div>
  );
};
