import React, { Component } from 'react'
import { BrowserRouter as Router,Route ,NavLink} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faList,faHome,faEdit, faUser, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'




export class NavMenu extends Component {
    render() {
        return (
            <div>
  <Navbar bg="dark" variant='dark' expand="lg" margin-right='auto'>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <NavLink className='navMar' href="#home" to='/' >Home <FontAwesomeIcon color='orange' icon={faHome} /></NavLink>
      <NavLink className='navMar' href="#link" to='/list'>List<FontAwesomeIcon color='orange'  icon={faList} /></NavLink>
      <NavLink className='navMar' href="#link" to='/search'>Search <FontAwesomeIcon color='orange'  icon={faSearch} /></NavLink>
      <NavLink className='navMar' href="#link" to='/create'>Create <FontAwesomeIcon color='orange'  icon={faPlus} /></NavLink>
      {
          localStorage.getItem('login')?
          <NavLink className='navMar' href="#link" to='/logout'>Logout <FontAwesomeIcon color='orange'  icon={faUser} /></NavLink>
            :
            <NavLink className='navMar' href="#link" to='/login'>Login <FontAwesomeIcon color='orange'  icon={faUser} /></NavLink>

      }
    </Nav>
 </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default NavMenu
