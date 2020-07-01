import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavbarBootstrap extends Component {
  // state taht will be triggered when someone scrolls down from the top of the page
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  // use handle scroll method when component is mounted
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // use the window object to check to see if the user has scrolled
  // call set state based on user activity
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }
  render() {
    // bootstrap navbar default style, changes to dark if user scrolls
    let navbarStyle = "transparent";
    if (this.state.scrolling) {
      navbarStyle = "dark";
    }

    return (
      <Navbar
        bg={navbarStyle}
        expand="lg"
        variant="dark"
        style={{ padding: "1rem 5%" }}
        fixed="top"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarBootstrap;
