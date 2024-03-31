import { useSelector } from "react-redux";
import { NewStudentForm } from "./NewStudentForm";
import { Link } from "react-router-dom";
import { TeacherForStudent } from "./TeacherForStudent";
import { UserVotes } from "./UserVotes";

export const StudentsList = () => {
  const students = useSelector((state) => state.students);

  const showStudents = students.map((student) => (
    <div
      key={student.id}
      className='student-excerpt'
    >
      <h3>
        {student.name} {student.surname}
      </h3>
      <p>
        <TeacherForStudent teacherId={student.teacher} />
      </p>
      <UserVotes student={student} />
      <Link
        to={`/students/${student.id}`}
        className='link-btn'
      >
        View
      </Link>
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
