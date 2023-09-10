import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " dir="rtl">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/"}>صفحه اصلی</Nav.Link>
            <Nav.Link href="/ticketing">پشتیبانی</Nav.Link>
            <NavDropdown title="واحد فناوری" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">قرارداد ها</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">داشبورد</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">تقویم</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">اطلاعات</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
