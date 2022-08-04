import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "./InfoUser.scss";

export default function InfoUser() {
  return (
    <div className="form">
      <div className="infor-form">
        <div className="title">
          <h2><BsFillPersonFill /></h2>
          <p>Thông tin bệnh nhân</p>
        </div>
        <div className="form-patient">
          <div className="form-patient1">
            <div className="patient-code">Mã bệnh nhân:</div>
            <div className="patient-code"></div>
            <div className="patient-code">Họ tên:</div>
            <div className="patient-code"></div>
            <div className="patient-code">Địa chỉ:</div>
            <div className="patient-code"></div>
          </div>
          <div className="form-patient2">
            <div className="patient-code">Giới tính:</div>
            <div className="patient-code"></div>
            <div className="patient-code">Ngày sinh:</div>
            <div className="patient-code"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
