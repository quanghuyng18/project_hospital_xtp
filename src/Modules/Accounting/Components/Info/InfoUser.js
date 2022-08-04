import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "../../Style/Accounting.scss"

export default function InfoUser() {
  return (
    <div className="container">
      <div className="inforUser">
        <div className="title">
          <h2><BsFillPersonFill /> </h2>
          <p>Thông tin bệnh nhân</p>
        </div>
        <div className="inforUser__user">
          <div className="userleft">
            <div className="inforUser__user__detail">Mã bệnh nhân:</div>
            <div className="inforUser__user__detail"></div>
            <div className="inforUser__user__detail">Họ tên:</div>
            <div className="inforUser__user__detail"></div>
            <div className="inforUser__user__detail">Địa chỉ: </div>
            <div className="inforUser__user__detail"> </div>
          </div>
          <div className="userright">
            <div className="inforUser__user__detail">Giới tính</div>
            <div className="inforUser__user__detail"></div>
            <div className="inforUser__user__detail">Ngày sinh:</div>
            <div className="inforUser__user__detail"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
