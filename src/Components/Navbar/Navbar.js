import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";

function Navbar() {
  return (
    <div className="navebar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search hear...." />
          <SearchIcon className="searchIcon" />
        </div>
        <div className="items">
          <div className="item">
            <TranslateIcon className="icon" />
            <span>ENGLISH</span>
            <div className="item">
              <NightsStayIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneIcon className="icon" />
              <div className="counter">3</div>
            </div>
            <div className="item">
              <MailIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <img
                src="https://static.fotor.com/app/features/img/aiface/3d/2.png"
                alt="profile pic"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
