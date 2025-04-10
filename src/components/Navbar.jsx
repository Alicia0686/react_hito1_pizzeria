import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const total = 25000;
  const token = false;
  const login = token ? (
    <Button variant="outline-light ms-2">
      <Link to="/logout" className="text-decoration-none ms-3 text-white">
        🔐Logout
      </Link>
    </Button>
  ) : (
    <Button variant="outline-light ms-2">
      <Link to="/login" className="text-decoration-none ms-3 text-white">
        🔐Login
      </Link>
    </Button>
  );
  const register = token ? (
    <Button variant="outline-light ms-2">
      <Link to="/profile" className="text-decoration-none ms-3 text-white">
        🔐Profile
      </Link>
    </Button>
  ) : (
    <Button variant="outline-light ms-2">
      <Link to="/register" className="text-decoration-none ms-3 text-white">
        🔐Register
      </Link>
    </Button>
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light">
              <Link to="/" className="text-decoration-none ms-3 text-white">
                🍕Home
              </Link>
            </Button>
            {login}
            {register}
          </Nav>
          <Nav>
            <Button variant="outline-light">
              <Link to="/cart" className="text-decoration-none text-white">
                🛒Total: {total.toLocaleString("es-ES")}
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
