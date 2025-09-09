import React from "react";
import NavBar from "../components/NavBar";
import HeaderCal from "../components/HeaderCal";

export default function NotFound() {
  return (
    <div style={{textAlign:"center"}}>
      <NavBar />
        <h1 style={{alignContent:"center", marginTop:"100px", fontFamily:"Itim"}}>
            404 Page Not Found
        </h1>
        <h1 style={{alignContent:"center"}}>
            ไม่พบหน้าที่คุณต้องการ กรุณาตรวจสอบ URL
        </h1>
    </div>
  );
}
