import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "../../Style/Accounting.scss"

export default function Pay() {
  return (
    <div className="container">
      <div className="pay">
        <div className="title">
          <h2><RiMoneyDollarCircleFill /> </h2>
          <p>Thanh toán hóa đơn</p>
        </div>
        <div className="pay__type">
          <div className="pay__type__select">
            <select>
              <option>Tiền mặt</option>
              <option>Thẻ ATM</option>
            </select>
          </div>
          <div className="pay__type__input">
            <input type="text" placeholder="điền thông tin giao dịch" />
          </div>
          <div className="pay__type__button">
            <button>THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
