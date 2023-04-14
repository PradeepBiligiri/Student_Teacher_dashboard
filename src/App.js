import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Teachers from "./Pages/Teacher/Teachers";
import Students from "./Pages/Students/Students";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
