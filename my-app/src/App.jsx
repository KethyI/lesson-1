import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app/root";
import { StudentsList } from "./app/parts/students/StudentsList";
import { StudentsPage } from "./app/parts/students/StudendsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/students",
        element: <StudentsList />,
      },
      {
        path: "/students/:studentId",
        element: <StudentsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
