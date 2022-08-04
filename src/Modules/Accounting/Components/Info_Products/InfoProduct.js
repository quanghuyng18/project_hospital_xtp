import React from "react";
import { MdDescription } from "react-icons/md";
import "../../Style/Accounting.scss"

export default function InfoProduct() {
  return (
    <div className="container">
      <div className="inforOrders">
        <div className="title">
          <h2><MdDescription /> </h2>
          <p>Thông tin đơn hàng</p>
        </div>
        <div className="inforOrders__orders">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="inforOrders__price">
          <div className="group">
            <div className="inforOrders__price__detail">Giá gốc</div>
            <div className="inforOrders__price__input">0 VNĐ</div>
          </div>
          <div className="group">
            <div className="inforOrders__price__detail">Tổng tiền khuyến mãi</div>
            <div className="inforOrders__price__input">0 VNĐ</div>
          </div>
          <div className="group">
            <div className="inforOrders__price__detail">Tổng số tiền thanh toán(bằng số)</div>
            <div className="inforOrders__price__input">0 VNĐ</div>
          </div>
          <div className="group">
            <div className="inforOrders__price__detail">Tổng số tiền(bằng chữ)</div>
            <div className="inforOrders__price__input"><input type="text" className="inforOrders__price__input__firstInput" /></div>
          </div>
          <div className="group">
            <div className="inforOrders__price__detail">Thời gian tạo đơn</div>
            <div className="inforOrders__price__input"><input type="text" /></div>
          </div>
          <div className="group">
            <div className="inforOrders__price__detail">Trạng thái thanh toán</div>
            <div className="inforOrders__price__input"><input type="text" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}