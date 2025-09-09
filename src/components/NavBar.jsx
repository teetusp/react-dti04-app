import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
    
    const container = {
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor : "#c78f3bff",
        padding : "10px 40px"
    }
    
    const menu = {
        listStyleType : "none",
        display : "flex",
        gap : "15px"
    }

    const menuAction = {
        color : "#0c2f7aff",
        fontWeight : "bold",
    }

    const linkAction = {
        textDecoration : "none",
        color : "#0c2f7aff",
    }

  return (
    <div style={container}>
      <div style={{fontSize:"20px", fontWeight:"bold", color:"white"}}> DTI Calculator </div>
        <div>
          <ul style={menu}>
            <li style={menuAction}><Link style={linkAction} to="/">HOME</Link> </li>
            <li style={menuAction}><Link style={linkAction} to="/calculator/moneyCal">MONEY Cal</Link></li>
            <li style={menuAction}><Link style={linkAction} to="/calculator/squareCal">SQUARE Cal</Link></li>
            <li style={menuAction}><Link style={linkAction} to="/calculator/bmrCal">BMR Cal</Link></li>
            <li style={menuAction}><Link style={linkAction} to="/calculator/carCal">CAR Cal</Link></li>
          </ul>
        </div>
    </div>
  );
}
