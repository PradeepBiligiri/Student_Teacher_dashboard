import "./home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

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
