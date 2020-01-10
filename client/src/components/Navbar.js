import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Redirect, Link} from 'react-router-dom'

const search = {
    borderRadius: '1.6rem 0 0 1.6rem',
    borderColor: 'transparent',
    padding: '18px'
}

const items = {
    paddingRight: '20px'
}

const bar = {
  backgroundColor: 'transparent'
}

const Navbarz = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let [redirect, setRedirect] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  let handleSearch = (videoTitle) => {
    props.movies.map((movie, i)=> {
      if(movie.Title.includes(videoTitle)) {
        console.log(videoTitle);
        setRedirect("/movieInfo/" + i)
      }

    })
  }
  return (
    <div>
      {redirect? <Redirect to={redirect}/>: ''}
        <Navbar className="ddd" expand="md">
          <NavbarBrand tag={Link} to="/" style={items}>Avatar</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} style={items} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={items} href="#">Contact</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
            <InputGroup style={search}>
              <InputGroupAddon addonType="prepend"><Button onClick={()=> {
                handleSearch(document.getElementById('search').value)
              }}><FontAwesomeIcon icon={faSearch}/></Button></InputGroupAddon>
              <Input id="search" />
            </InputGroup>
            </NavbarText>
            {props.isUserLoggedIn?
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} style={items} to="/">Log Out</NavLink>
              </NavItem>
            </Nav>
            :
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} style={items} to="/login">Log in</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink tag={Link} style={items} to="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav>}
          </Collapse>
        </Navbar>
    </div>
  );
}
export default Navbarz;
{/* <input style={search} type="text" placeholder="Search..." /> */}
