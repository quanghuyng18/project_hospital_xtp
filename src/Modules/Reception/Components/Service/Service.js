import React from "react";
import { SiAddthis } from "react-icons/si";
import { Form, InputGroup, Input, ButtonGroup, Button } from "reactstrap";
import "./style.scss";

export default function Service() {
  return (
  <div className="services">
    <Form className="service">
      <InputGroup className="select">
        <SiAddthis className="icon-s"/>
        <p>Chọn dịch vụ</p>
      </InputGroup>
      <InputGroup className="form-s">
        <div className="name-s">
          <div className="text">
              <p>Chọn dịch vụ</p><p className="mark">*</p>
          </div>
          <select className="menu1">
              <option>Chọn dịch vụ</option>
          </select>
        </div>
        <div className="object-s">
          <div className="text">
              <p>Đối tượng dịch vụ</p><p className="mark">*</p>
            </div>
            <select className="menu2">
              <option>Tứ Thân Phụ Mẫu</option>
            </select>
        </div>
        <div className="room-s">
            <div className="text">
              <p>Phòng khám</p><p className="mark">*</p>
            </div>
            <select className="menu3">
              <option>Chọn phòng khám</option>
            </select>
        </div>
      </InputGroup>
      <InputGroup className="reason">
        <p className="mark">*</p>
        <Input placeholder="nhập lý do" className="input-reason"></Input>
      </InputGroup>
    </Form>
    <ButtonGroup className="btn-active">
      <Button className="btn-delete">XÓA</Button>
      <Button className="btn-save">LƯU</Button>
    </ButtonGroup>
  </div>
  );
}
