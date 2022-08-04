import React from "react";
import SearchForm from "./Components/Search/SearchForm";
import Info from "./Components/Info/Info";
import Service from "./Components/Service/Service";
import "./Style/Reception.scss";
export default function Reception() {
  return (
    <div className="Reception">
      <SearchForm />
      <Info />
      <Service />
    </div>
  );
}