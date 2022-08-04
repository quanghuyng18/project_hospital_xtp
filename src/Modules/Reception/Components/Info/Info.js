import React from "react";
import { InputGroup, Input, Form, Button } from "reactstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";

import "./style.scss";

export default function Info() {
  return (
  <div className="formss">
    <Form className="form-1">
      <div className="title-1">
        <BsFillPersonFill className="icon-1"/>
        <p>Thông tin bệnh nhân</p>
      </div>
      <Form className="form-patient">
        <InputGroup className="patient-code">
            <div className="text">
              <p>Mã bệnh nhân</p><p className="mark">*</p>
            </div>
            <Input type="text" className="input-code"></Input>
            <Button className="btn-code">IN</Button>
        </InputGroup>
        <InputGroup className="patient-name">
            <div className="text">
              <p>Họ tên</p><p className="mark">*</p>
            </div>
            <Input type="text" className="input-name"></Input>
        </InputGroup>
        <InputGroup className="patient-birth">
            <div className="text">
              <p>Ngày sinh</p><p className="mark">*</p>
            </div>
            <Input type="date" className="input-birth"></Input>
        </InputGroup>
        <InputGroup className="patient-gender">
            <div className="text">
              <p>Giới tính</p><p className="mark">*</p>
            </div>
            <select className="input-gender">
              <option>Nam</option>
              <option>Nữ</option>
            </select>
        </InputGroup>
        <InputGroup className="patient-phone">
            <div className="text">
              <p>Số điện thoại</p><p className="mark">*</p>
            </div>
            <Input type="text" className="input-phone"></Input>
        </InputGroup>
      </Form>
    </Form>
    <Form className="form-2">
      <div className="title-2">
        <RiFileList2Fill className="icon-2"/>
        <p>Thông tin liên lạc</p>
      </div>
      <Form className="form-address">
          <InputGroup className="patient-home">
              <div className="text">
                <p>Địa chỉ</p><p className="mark">*</p>
              </div>
              <Input type="text" className="input-home"></Input>
          </InputGroup>
          <InputGroup className="patient-address">
              <select className="province">
                <option>Tỉnh</option>
              </select>
              <select className="district">
                <option>Huyện</option>
              </select>
              <select className="village">
                <option>Phường/xã</option>
              </select>
          </InputGroup>
          <InputGroup className="patient-card">
              <div className="text">
                <p>CMT/CCCD</p>
              </div>
              <Input type="text" className="input-card"></Input>
          </InputGroup>
          <InputGroup className="patient-place">
              <div className="text">
                <p>Nơi đăng kí</p>
              </div>
              <Input type="text" className="input-place"></Input>
          </InputGroup>
          <InputGroup className="patient-person">
              <div className="text">
                <p>Tên người liên hệ</p>
              </div>
              <Input type="text" className="input-person"></Input>
          </InputGroup>
        </Form>
    </Form>
  </div>
  );
}
