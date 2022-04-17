import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Products.css";
const Products = (props) => {
  const { img, name, body, price } = props.product;
  return (
    <div className="user-card mt-5 ">
      <CardGroup className="">
        <Card className="">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-success fw-bold fs-2">{name}</Card.Title>
            <Card.Title>Price: <span className="text-danger fw-bold">$ {price}</span></Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-info d-block w-100">Book Now</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Products;
