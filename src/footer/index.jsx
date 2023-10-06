import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import "./style.css"
import { Drawer } from "antd";



export default function Index() {  
  return (
    <>
    <Card className='main'>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first" className='footerNav'>
          <Nav.Item>
            <Nav.Link href="#first">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Signup</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title><h2>Swiggy</h2></Card.Title>
        <Card.Text>
          Don't go out! Order and enjoy at your place
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Sample footer */}
    {/* <>
    <footer className='main'>
      <div className='header'>
        <nav className='footerNav'>
            <a href="#first">Login</a>
            <a href="#link">Signup</a>
        </nav>
      </div>
      <div className='body'>
        <div className='title'><h2>Swiggy</h2></div>
        <div className='text'>
          Don't go out! Order and enjoy at your place
        </div >
        <button className="btn3" onClick={showDrawer}>
          Add Product
        </button>
      </div>
    </footer>
    </>
     */}
    </>
  );
}