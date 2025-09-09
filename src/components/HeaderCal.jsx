import React from 'react'

export default function HeaderCal(props) {
  return (
    <div>
        <h1 style={{textAlign:"center", color:"#723300ff"}}>
            {props.titleName}
        </h1>
        <img style={{display:"block", margin:"0 auto",width:"150px" }} src={props.imgName} alt="" />
    </div>
  )
}
