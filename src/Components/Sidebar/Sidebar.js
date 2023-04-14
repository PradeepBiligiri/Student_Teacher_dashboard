import "./sidebar.scss";
import SchoolIcon from "@mui/icons-material/School";
import Person2Icon from "@mui/icons-material/Person2";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <SchoolIcon className="logoIcon" />
            Stdent Teacher Management
          </span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="detail">Details</p>
          <Link to="/teachers" style={{ textDecoration: "none" }}>
            <li>
              <Person2Icon className="icon" />
              <span>Teachers</span>
            </li>
          </Link>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li>
              <Groups2Icon className="icon" />
              <span>Students</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
