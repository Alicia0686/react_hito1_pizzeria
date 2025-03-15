import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fw-bold fs-4">{name}</Card.Title>
        <Card.Text className="text-center fs-5">Ingredientes:</Card.Text>
        <Card.Text className="text-center">
          🍕{ingredients.join(", ")}{" "}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text className="text-center fw-bold fs-4">
          Precio: ${price}
        </Card.Text>
        <div className="d-flex justify-content-center gap-3">
          <Button
            bg="dark"
            variant="light"
            className="border-dark text-dark m-3"
          >
            Ver Más 👀
          </Button>
          <Button bg="dark" variant="dark" className="m-3">
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
