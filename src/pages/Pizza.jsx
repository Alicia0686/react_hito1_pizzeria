import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pizza = () => {
  const { id } = useParams();
  const [pizzas1, setPizzas1] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const getPizzas1 = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      console.log(data);
      setPizzas1(data);
      setIngredients(data.ingredients);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPizzas1();
  }, [id]);

  return (
    <div className="d-flex justify-content-center aling-items-center m-4">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={pizzas1.img} />
        <Card.Body>
          <Card.Title className="fw-bold fs-4">{pizzas1.name}</Card.Title>
          <Card.Text className="text-justify fs-9">{pizzas1.desc}</Card.Text>
          <Card.Title className="text-center fs-5">🍕 Ingredientes:</Card.Title>
          <ul className="text-justify">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Card.Body>
        <Card.Body>
          <Card.Text className="text-center fw-bold fs-4">
            Precio: ${pizzas1.price}
          </Card.Text>
          <div className="d-flex justify-content-center gap-3">
            <Button bg="dark" variant="dark" className="m-3">
              Añadir 🛒
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizza;


 
