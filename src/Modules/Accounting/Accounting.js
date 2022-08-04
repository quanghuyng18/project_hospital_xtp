import React from "react";
import InfoUser from "./Components/Info/InfoUser";
import InfoProduct from "./Components/Info_Products/InfoProduct";
import Pay from "./Components/Pay/Pay";
import SearchInfo from "./Components/Search/SearchInfo";
// import "./Style/Accounting.scss";
export default function Accounting() {
  return (
    <div className="Accounting">
      <SearchInfo />
      <InfoUser />
      <InfoProduct />
      <Pay />
    </div>
  );
}
