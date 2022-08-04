import React from "react";
import { Input, InputGroup } from "reactstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import "./style.scss";

export default function SearchForm() {
  return (
  <div className="search">
    <InputGroup className="input-group">
      <div className="content">
        <AiOutlineSearch/>
        <p>Tìm kiếm</p>
      </div>
      <Input type="text" placeholder="Nhập mã bệnh nhân, số điện thoại, tên bệnh nhân (không phân biệt hoa thường)..." className="input" />
    </InputGroup>
  </div>
  )
}
