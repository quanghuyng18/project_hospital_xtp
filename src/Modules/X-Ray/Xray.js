import React from "react";
import Des from "./Components/Des/Des";
import InfoUser from "./Components/Info/InfoUser";
import List from "./Components/List/List";
import "./Shared/Xray.scss";
export default function Xray() {
  return (
    <div className="Xray">
      <div className="XrayForm-1">
        <InfoUser />
        <Des />
      </div>
      <div className="XrayForm-2">
        <List />
      </div>
    </div>
  );
}
