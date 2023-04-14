import "./sidebar.scss";
import SchoolIcon from "@mui/icons-material/School";
import Person2Icon from "@mui/icons-material/Person2";
import Groups2Icon from "@mui/icons-material/Groups2";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <SchoolIcon className="icon" />
          Stdent Teacher Management
        </span>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="detail">Details</p>
          <li>
            <Person2Icon className="icon" />
            <span>Teachers</span>
          </li>
          <li>
            <Groups2Icon className="icon" />
            <span>Students</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
