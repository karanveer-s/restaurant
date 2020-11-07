import React,{useState} from 'react';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import Hero from '../components/HeroImage/Heroimage';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import AboutUs from '../components/AboutUs';
import Restaurants from '../components/Restaurant/restaaurants';
import {DISHES} from '../shared/dishes';
import Admin from '../components/Admin';

const AppRouter = ({handleLogOut}) =>{
    const [dishes, setdishes] = useState(DISHES)
    return(
    <Router>
        <Header handleLogOut={handleLogOut}/>
        <Hero/>
            <Switch>
                <Route>
                <Route path='/home' component={Home} />
                <Route path='/AboutUs' component={AboutUs} />
              <Route exact path='/menu' component={() => <Menu dishes={dishes}/>} />
              <Route path='/restaurants' component={Restaurants} />
              <Route path='/admin' component={Admin} />
                </Route>
            </Switch>
            <Footer/>
    </Router>
);  
}
export default AppRouter;