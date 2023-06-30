import { hover } from "@testing-library/user-event/dist/hover";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-3">
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <b>ATRASKI | Hotels</b>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ATRASKI | HOTELS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link
                    to="/"
                    style={{
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "teal",
                      padding: "10px",
                      borderRadius: "10px",
                      marginInline: "10px",
                    }}
                    className="headlink"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="headlink"
                    style={{
                      textDecoration: "none",
                      color: "teal",
                      padding: "10px",
                      borderRadius: "10px",
                      marginInline: "10px",
                    }}
                  >
                    About
                  </Link>
                  <Link
                    to="/reservation"
                    className="headlink"
                    style={{
                      textDecoration: "none",
                      color: "teal",
                      padding: "10px",
                      borderRadius: "10px",
                      marginInline: "10px",
                    }}
                  >
                    Reservation{" "}
                  </Link>
                  <Link
                    to="#action2"
                    className="headlink"
                    style={{
                      textDecoration: "none",
                      color: "teal",
                      padding: "10px",
                      borderRadius: "10px",
                      marginInline: "10px",
                    }}
                  >
                    Blogs
                  </Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ backgroundColor: "" }}
                  />
                  
                     <Link
                    to="/contactus"
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                      textDecoration: "none"
                      
                    }}
                  >
                    Contact Us
                  </Link>

                  
                 
                  {/* <Button
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
