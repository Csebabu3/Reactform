import React from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';

function TopNew() {
    const menuData = [
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/about',
            name:'About'
        },
        {
            path:'/contact',
            name:'Contact'
        },
        {
            path:'/service',
            name:'Service'
        }
    ]
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                        <div className='list_item'>{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
          <nav className='ms-auto'>
            <button className='btn btn-success'>Sign up</button>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNew;
