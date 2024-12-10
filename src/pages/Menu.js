import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>  
          <li>
            <Link to="/AddTeacher">Insert teacher</Link>
          </li>
          <li>
            <Link to="/UpdateTeacher">Update Teacher</Link>
          </li>
          <li>
            <Link to="/DeleteTeacher">Delete Teacher</Link>
          </li>
          <li>
            <Link to="/FindTeacher">Find Teacher</Link>
          </li>
          <li>
            <Link to="/ListOfTeachers">List of teachers</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;
