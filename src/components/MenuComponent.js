import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,CardSubtitle, Button } from 'reactstrap';
import Hero from './HeroImage/Heroimage'

    
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-4 ">
                 <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>Some information about the restaurant.</CardText>
                      < a href="http://localhost:3001">
                      <Button >See Menu</Button>
                      </a>
                  </CardBody>
                </Card>
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