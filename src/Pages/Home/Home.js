import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <dv className="homeContainer">
        <Navbar />
        Home Component
      </dv>
    </div>
  );
}

export default Home;
