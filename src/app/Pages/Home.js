import React from "react";
import Items from "../Containers/Items/Items";

function Home(props) {
  return (
    <div>
      <div
        style={{
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          padding: "15px   15px 0  15px ",
        }}
      >
        <h1 style={{ fontSize: "18px" }}>Task : </h1>
        <h1 style={{ fontSize: "15px", marginLeft: "4px" }}> Pagination </h1>
      </div>
      <div
        style={{
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          padding: " 0 15px   15px   15px ",
        }}
      >
        <h1 style={{ fontSize: "18px" }}>Done by : </h1>
        <h1 style={{ fontSize: "15px", marginLeft: "4px" }}>
          A. Austin Prabu{" "}
        </h1>
      </div>

      <Items></Items>
    </div>
  );
}

export default Home;
