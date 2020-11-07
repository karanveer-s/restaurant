import React from "react";
import {CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

function Restaurant({ name, description, imgURL }){
  return(
    <div style={{maxWidth:"30 0px" }}>
                  <CardImg width="100%" src={imgURL} alt={name} style={{objectFit:"contain"}} />
                  <CardBody>
                      <CardTitle><strong>{name}</strong></CardTitle>
                         <CardText>{description}</CardText>
                      <Button>See Menu</Button>
                  </CardBody>
                </div>
);
  }
export default Restaurant;
