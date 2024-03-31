import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { TeacherForStudent } from "./TeacherForStudent";
import { UserVotes } from "./UserVotes";

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
        <UserVotes student={student} />
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
