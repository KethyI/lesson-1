import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentsPage = () => {
  let params = useParams();
  const { studentId } = params;

  const student = useSelector((state) =>
    state.students.find((student) => student.id === studentId)
  );

  console.log(state);

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
