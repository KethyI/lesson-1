import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentPage = () => {
  let params = useParams();
  const { ProductID } = params;

  const student = useSelector((state) =>
    state.students.find(student.id === ProductID)
  );

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
