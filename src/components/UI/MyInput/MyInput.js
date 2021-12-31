import React from 'react'
import "./myinput.css";

const MyInput = (props) => {
    return (
       <input className="inp" placeholder="Search" {...props}/>
    )
}

export default MyInput;
