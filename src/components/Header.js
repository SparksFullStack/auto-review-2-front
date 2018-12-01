import React, { Component } from 'react'
import "./Header.css";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap';


class Header extends Component {

    state = {
        isLoggedIn: true,
        isNavOpen: false,
    }


    navToggle = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

  render() {
    return (
      <header>
        <Navbar className="main-navbar" dark expand="lg">
            <NavbarBrand className="text-white" href="/"><span className="main-navbar__title">Auto Review For You</span></NavbarBrand>
            <NavbarToggler onClick={this.navToggle} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                    {!this.state.isLoggedIn ? 
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Sign In</NavLink>
                        </NavItem>
                    </Nav> :
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">My Reviews</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Billing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white mr-4 main-navbar__links" href="#">Sign Out</NavLink>
                        </NavItem>
                    </Nav>
                    }
            </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header;
