import React from "react";
import { FaPen } from "react-icons/fa";
import "./Des.scss";

export default function Des() {
  return (
  <div className="form">
    <div className="desform">
      <div className="desform1">
        <div className="desform1-title">
          <div className="title">
            <h2><FaPen /></h2>
            <p>Mô tả chi tiết kết quả x-quang</p>
          </div>
          <div className="desform1-title-select">
            <select className="select-des">
              <option>Chọn loại</option>
            </select>
          </div>
        </div>
        <div className="area">
          <textarea rows="5" cols="120" className="xquang" placeholder="Nhập kết quả X-Quang"></textarea>
        </div>
      </div>
      <div className="desform2">
        <div className="title">
          <h2><FaPen /></h2>
          <p>Kết luận</p>
        </div>
        <div className="area">
          <textarea rows="10" cols="120" className="xquang" placeholder="Nhập kết quả X-Quang"></textarea>
        </div>
      </div>
    </div>
  </div>
  );
}
