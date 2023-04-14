import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Students.scss";

function Students() {
  return (
    <div className="students">
      <Sidebar />
      <div className="studentContainer">
        <Navbar />
        <h2>Student Details</h2>
        <div className="studentWrapper">
          <div className="addStudent">
            Add Students
            <Link to="/students/new" className="link">
              New
            </Link>
          </div>
          <div className="studtentTable">Student table</div>
        </div>
      </div>
    </div>
  );
}

export default Students;
