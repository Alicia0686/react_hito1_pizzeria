import { Container } from "react-bootstrap";
import "./NotFound.css" 
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center aling-items-center text-center  gap-3 vh-100">
      <h1 className="text">404</h1>
      <p className="fs-2">Page not found</p>
      <Link to="/" className="button">Volver a Home</Link>
    </Container>
  );
};

export default NotFound;
