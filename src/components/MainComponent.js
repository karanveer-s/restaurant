import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent' ;
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Restaurants from './Restaurant/restaaurants';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        // selectedDish: null
    };
    const {handleLogout} = props;
  }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }

  render() {

  //   const HomePage = () => {
  //     return(
  //         <Home/> 
  //     );
  //   }
    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Switch>
              {/* <Route path='/home' component={HomePage} /> */}
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/restaurants' component={Restaurants} />
              {/* <Redirect to="/home" /> */}

          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;