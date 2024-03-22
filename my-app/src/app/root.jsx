import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div id='main'>
      <div id='list'>
        <nav>
          <NavLink
            to={"/students"}
            end
          >
            Students
          </NavLink>
          <a>Teachers</a>
        </nav>
      </div>
      <div id='main_page'>
        <h2>Students Project</h2>
        <hr></hr>
        <Outlet />
      </div>
    </div>
  );
}
