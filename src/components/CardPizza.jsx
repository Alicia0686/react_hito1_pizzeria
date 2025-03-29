import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPizza = ({ desc, img, ingredients, name, price }) => {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fw-bold fs-4">{name}</Card.Title>
        <Card.Text className="text-justify fs-9">{desc}</Card.Text>
        <Card.Title className="text-center fs-5">🍕 Ingredientes:</Card.Title>
        <Card.Text className="text-justify">
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
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


  