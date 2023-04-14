import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Teachers.scss";

function Teachers() {
  return (
    <div className="teachers">
      <Sidebar />
      <div className="teacherContainer">
        <Navbar />
        <h2>Teachers Details</h2>
        <div className="teacherWrapper">
          <div className="addTeacher">
            Add New Teacher
            <Link to="/teachers/new" className="link">
              New
            </Link>
          </div>
          <div className="teacherTable">Teacher Table</div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
