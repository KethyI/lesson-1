import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentsPage = () => {
  let params = useParams();
  const { studentId } = params;

  const student = useSelector((state) =>
    state.students.find((student) => student.id == studentId)
  );
  const s = useSelector((state) =>
    state.students.find((st) => st.id == studentId)
  );
  console.log(s);
  const student1 = useSelector((state) => state);
  console.log(student1);
  console.log(student);
  console.log(studentId);

  if (!student) {
    return <p>No such student</p>;
  } else {
    return (
      <div>
        <h2>
          {student.name} {student.surname}
        </h2>
        <p>Age: {student.age}</p>
        <p>Speciality: {student.speciality}</p>
      </div>
    );
  }
};
