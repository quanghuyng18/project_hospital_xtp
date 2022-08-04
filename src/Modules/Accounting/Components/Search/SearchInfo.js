import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { CgPlayListCheck } from "react-icons/cg";
import { AiOutlineSearch } from 'react-icons/ai';
import "../../Style/Accounting.scss"

export default function SearchInfo() {
  return (
    <div className="container">
      <div className="searchInfo">
        <div className="searchInfo__cashRegister">
          <div className="title">
            <h2><MdLibraryBooks /></h2>
            <p>Sổ thu</p>
          </div>
          <div className="searchInfo__cashRegister__select">
            <select>
              <option>Sổ Thu Ngân Ca Sáng</option>
              <option>Sổ Thu Ngân Ca Chiều</option>
            </select>
          </div>
        </div>
        <div className="searchInfo__idPatient">
          <div className="title">
            <h2><CgPlayListCheck /></h2>
            <p>Mã bệnh nhân</p>
          </div>
          <div className="searchInfo__idPatient__input">
            <input type="text" placeholder="Nhập mã bệnh nhân" />
          </div>
          <div className="searchInfo__idPatient__button">
            <button><AiOutlineSearch /></button>
          </div>
        </div>
        <div className="searchInfo__idPatient">
          <div className="title">
            <h2><CgPlayListCheck /></h2>
            <p>Mã hóa đơn</p>
          </div>
          <div className="searchInfo__idPatient__input">
            <input type="text" placeholder="Nhập mã hóa đơn" />
          </div>
          <div className="searchInfo__idPatient__button">
            <button><AiOutlineSearch /></button>
          </div>
        </div>
      </div>
    </div>
  );
}