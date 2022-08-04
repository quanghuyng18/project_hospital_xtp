import { React } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";
import Logo from "./image/logoPK.png";
import Icon1 from "./image/accounting.svg";
import Icon2 from "./image/reception_hospital.svg";
import Icon3 from "./image/doctor-icon.svg";
import Icon4 from "./image/test-exam-svgrepo-com.svg";
import Icon5 from "./image/x-ray-svgrepo-com.svg";
import Icon6 from "./image/ent.svg";
import Icon7 from "./image/ultrasound.svg";
import Icon8 from "./image/first-aid-bag.svg";
import Icon9 from "./image/inventory.svg";
import Icon10 from "./image/management.svg";
import Icon11 from "./image/user.svg";
import "./style.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="route">
        <img src={Logo} alt="logo" className="h-logo"></img>
        <Link to="/Accounting" className="module1">
          <img src = {Icon1} alt="icon1" className="icon-1"></img>
          <p style={{color: "white"}}>THU NGÂN</p>
        </Link>
        <Link to="/Reception" className="module2">
          <img src={Icon2} alt="icon2" className="icon-2"></img>
          <p style={{color: "white"}}>LỄ TÂN</p>
        </Link>
        <Link to="*" className="module3">
          <img src={Icon3} alt="icon3" className="icon-3"></img>
          <p style={{color: "white"}}>KHÁM BỆNH</p>
        </Link>
        <Link to="*" className="module4">
          <img src={Icon4} alt="icon4" className="icon-4"></img>
          <p style={{color: "white"}}>XÉT NGHIỆM</p>
        </Link>
        <Link to="/Xray" className="module5">
          <img src={Icon5} alt="icon5" className="icon-5"></img>
          <p style={{color: "white"}}>X-QUANG</p>
        </Link>
        <Link to="*" className="module6">
          <img src={Icon6} alt="icon6" className="icon-6"></img>
          <p style={{color: "white"}}>NỘI SOI</p>
        </Link>
        <Link to="*" className="module7">
          <img src={Icon7} alt="icon7" className="icon-7"></img>
          <p style={{color: "white"}}>SIÊU ÂM</p>
        </Link>
        <Link to="*" className="module8">
          <img src={Icon8} alt="icon8" className="icon-8"></img>
          <p style={{color: "white"}}>NHÀ THUỐC</p>
        </Link>
        <Link to="*" className="module9">
          <img src={Icon9} alt="icon9" className="icon-9"></img>
          <div>
            <p style={{color: "white"}}>KHO</p>
            <BiDownArrow className="arrow"/>
          </div>
        </Link>
        <Link to="*" className="module10">
          <img src={Icon10} alt="icon10" className="icon-10"></img>
          <div>
            <p style={{color: "white"}}>QUẢN LÝ</p>
            <BiDownArrow className="arrow"/>
          </div>
        </Link>
        <div className="module11">
          <img src={Icon11} alt="icon11"></img>
          <div>
            <p style={{color: "white"}}>NGUYỄN MINH HIẾU</p>
            <BiDownArrow className="arrow"/>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}