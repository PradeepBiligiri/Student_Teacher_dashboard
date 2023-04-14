import "./home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widges from "../../Components/Widges/Widges";
import { Link } from "react-router-dom";

function Home() {
  let data = [
    {
      title: "Students",
      subTitle: "No of Students",
      count: 50,
      color: "orange",
    },
    {
      title: "Teachers",
      subTitle: "No of Teachers",
      count: 6,
      color: "green",
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <dv className="homeContainer">
        <Navbar />
        <h2>Home Page</h2>
        <div className="widgets">
          {data.map((data) => {
            return (
              <Link to={`/${data.title}`} style={{ textDecoration: "none" }}>
                <Widges
                  title={data.title}
                  subTitle={data.subTitle}
                  count={data.count}
                  color={data.color}
                />
              </Link>
            );
          })}
        </div>
      </dv>
    </div>
  );
}

export default Home;
