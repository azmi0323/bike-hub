import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Products = (props) => {
  const {img,name}=props.product
  return (
    <div className="">
      <CardGroup className="">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button>Details</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Products;
