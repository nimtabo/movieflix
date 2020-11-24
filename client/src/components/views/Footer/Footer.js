import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        color: "#04050a",
      }}
    >
      <p>
        {" "}
        Happy Hacking <Icon type="smile" />
      </p>
    </div>
  );
}

export default Footer;
