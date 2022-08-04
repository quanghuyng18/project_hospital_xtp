import React from "react";
import { HiUsers } from "react-icons/hi";
import "./List.scss";

export default function List() {
  return( 
  <div className="forms">
    <div className="list-form">
      <div className="title">
        <h2><HiUsers /></h2>
        <p>Danh sách bệnh nhân chờ chụp X-Quang:</p>
      </div>
      <div className="list-form-input">
        <input type="text" placeholder="Lọc theo mã, họ tên" />
      </div>
      <div className="list-parient">
        <div className="list-parient-title">
          <div className="titles"><p>Bệnh nhân chờ</p></div>
          <div className="titles"><p>Bệnh nhân có kết quả</p></div>
        </div>
        <div className="list-parient-form">
          <div className="list-parient-form-cout">Ngày 01/08/2022 (có 0 bệnh nhân)</div>
          <div className="list-parient-form-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bệnh nhân</th>
                  <th>Bệnh nhân</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="list-parient-form-cout">Tìm kiếm bệnh nhân từ ngày 29/07/2022 đến ngày 31/07/2022</div>
          <div className="list-parient-form-search">
            <div className="list-parient-form-search-input">
              <input type="text" placeholder="Lọc theo mã, họ tên" />
            </div>
            <div className="list-parient-form-search-button">
              <button>TÌM KIẾM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
