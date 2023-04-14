import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Teachers from "./Pages/Teacher/Teachers";
import Students from "./Pages/Students/Students";
import New from "./Pages/New/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers/new" element={<New />} />
        <Route path="/students/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
