import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,CardSubtitle, Button } from 'reactstrap';

    function RenderMenuItem({dish, onClick}) {
        return (
              <Card onClick={()=> onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>Some information about the restaurant.</CardText>
                      <Button>See Menu</Button>
                  </CardBody>
                </Card>
        );
    }
    
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-4 ">
                 <RenderMenuItem dish={dish} onClick={props.onClick} />
              </div>
            );
        });

        return (
            <div className="container" >
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
        
export default Menu;