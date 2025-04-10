import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      console.log(data);
      setPizzas(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center m-3 gap-3">
          {pizzas.map((pizza) => (
            <Col md="auto" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
                id={pizza.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
