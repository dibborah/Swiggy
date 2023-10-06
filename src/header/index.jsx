import React, { useEffect, useState } from "react";
import {Form, Input } from "antd";
import "./style.css";
import logo from "../img/logo.png";
import DrawerComponent from "../drawer/index";

export default function Index() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  console.log('open' , open)
},[open]);

// CONST TOGGLE = (PREV) => SEToPEN(!PREV);

  const onClose = () => {
    setOpen(false);
  };

  return (

    <div className="nav-bar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="btn">
        <button className="btn1">Login</button>
        <button className="btn2">Sign up</button>
        <button className="btn3" onClick={()=> setOpen(true)}>
          Add Product
        </button>

        <DrawerComponent  
        data={open} 
        onClose = {onClose}
        />
               
      </div>
    </div>
  );
}

 {/* <Form onFinish>
 <Input />
              <Form.item
              rules={{
                required={true}
                validaor={

                }
              }}
              >
                 <Input />
              </Form.item> */}

          {/* </Form> */}