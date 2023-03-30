import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { logout } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ESA SMART ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        
          <p className="title">LISTS</p>
          
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>ABOUT US</span>
          </li>
          </Link>
          
          
          
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>OUR COMMUINTY</span>
          </li> */}
          <p className="title">SERVICE</p>
          <Link to="/events" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>EVENTS</span>
          </li>
          </Link>
          <Link to="/community" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>OUR COMMUINTY</span>
          </li></Link>
          <Link to="/smartTalk" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>SMARTTALK</span>
          </li>
          </Link>
          <Link to="/contactUs" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>CONTACT US</span>
          </li>
          </Link>
          
          <Link to="/methotology" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Methotogy</span>
          </li>
          </Link>
          <Link to="/international" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>INTERNATIONAL</span>
          </li>
          </Link>
          <Link to="/allinnone" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Teams</span>
          </li>
          </Link>
          
          <p className="title">USER</p>
          <Link to="/apply" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>APPLY NOW</span>
          </li>
          </Link>
          <Link to="/faq" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>FAQ</span>
          </li></Link>
          <Link to="/subscribe" style={{ textDecoration: "none" }}>
          <li>
          <AccountCircleOutlinedIcon className="icon" />
            <span>Subscribe</span>
          </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
