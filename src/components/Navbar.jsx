import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
const Navbar1 = () => {
  const total = 25000;
  const token = true;
  const login = token ? (
    <Nav.Link href="#link">🔐Logout</Nav.Link>
  ) : (
    <Nav.Link href="#link">🔐Login</Nav.Link>
  );
  const register = token ? (
    <Nav.Link href="#link">🔐Profile</Nav.Link>
  ) : (
    <Nav.Link href="#link">🔐Register</Nav.Link>
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light">🍕Home</Button>
            {login}
            {register}
          </Nav>
          <Nav>
            <Button variant="outline-light">
              🛒Total: {total.toLocaleString("es-ES")}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
