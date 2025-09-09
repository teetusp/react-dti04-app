import React from "react";

export default function Footer({ emoji }) {
  const fontStyle = {
    fontFamily: "Itim",
    fontSize: "20px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <span style={fontStyle}>Created by Teetus {emoji}</span>
      <br />
      <span style={fontStyle}>Copyright © 2025 SouthEast Asia University</span>
    </div>
  );
}
