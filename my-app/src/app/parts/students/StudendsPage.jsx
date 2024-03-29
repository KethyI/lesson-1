import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { TeacherForStudent } from "./TeacherForStudent";

export const StudentsPage = () => {
  let params = useParams();
  const { studentId } = params;

  const student = useSelector((state) =>
    state.students.find((student) => student.id == studentId)
  );

  if (!student) {
    return <p>No such student</p>;
  } else {
    return (
      <div>
        <h2>
          {student.name} {student.surname}
        </h2>
        <p>
          <TeacherForStudent teacherId={student.teacher} />
        </p>
        <p>Age: {student.age}</p>
        <p>Speciality: {student.speciality}</p>
        <Link
          to={`/editStudent/${studentId}`}
          className='link-btn'
        >
          Edit
        </Link>
      </div>
    );
  }
};
