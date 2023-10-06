import React, { useEffect, useState } from "react";
import { Drawer, Form, Input } from "antd";
// import "./style.css";

const DrawerComponent = ({data , onClose})=>{

  return (
    <Drawer
      width={500}
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open = {data}
    >
      <form action="POST" className="fillup">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          minLength={6}
          maxLength={20}
          required
        />
        <input
          type="number"
          name="age"
          id="age"
          min={0}
          max={80}
          placeholder="Enter your age"
          required
        />
        <input type="date" name="DOB" id="DOB" />
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a comment"
          required
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="YYYY"
          min={1999}
          max={2023}
          required
        />
        <textarea
          id="comment"
          name="comment"
          rows="1"
          cols="20"
          placeholder="Write a comment"
          required
        />
        <span className="gender" required>
          Gender: Male
          <input type="radio" name="gender" id="gender" />
          Female <input type="radio" name="gender" id="gender" />
        </span>
      </form>

      <div className="finalButtons">
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="submit">
          Submit
        </button>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;