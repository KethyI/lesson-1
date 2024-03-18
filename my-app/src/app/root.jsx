import { StudentsList } from "./parts/students/StudentsList";
import { NewStudentForm } from "./parts/students/AddStudent";

export default function Root() {
  return (
    <div id='main'>
      <div id='list'>
        <nav>
          <a>Students</a>
          <a>Teachers</a>
        </nav>
      </div>
      <div id='main_page'>
        <h2>Students Project</h2>
        <hr></hr>
        <NewStudentForm />
        <StudentsList />
      </div>
    </div>
  );
}
