import React from "react";

import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
  } from "reactstrap";


  function NewNavbar() {

    return (
        <>
            <Navbar className="position-static" expand="lg" color="navbar-transparent">
                <Container>
                    <NavbarBrand className="mr-auto"
                        href="https://angelikafavoretto.com.br"
                        target="_blank"
                    >Angelika Favoretto</NavbarBrand>
                </Container>
            </Navbar>
        </>
    );
  }

export default NewNavbar