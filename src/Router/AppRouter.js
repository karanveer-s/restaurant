import React from 'react';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import Restaurants from '../components/Restaurant/restaaurants';

const AppRouter = ({handleLogOut}) =>(
    <Router>
        <Header handleLogOut={handleLogOut}/>
        <>
            <Switch>
                <Route>
                <Route path='/home' component={Home} />
              <Route exact path='/menu' component={() => <Menu />} />
              <Route path='/restaurants' component={Restaurants} />
                </Route>
            </Switch>
            <Footer/>
        </>
    </Router>
);  
export default AppRouter;