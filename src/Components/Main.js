import React from 'react';
//import Shopping from './Shopping';
//import Form from './Form';
//import Boot from './Boot';
//import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from "./Menu";
import DishDetails from './DishDetails';
import About from './Aboutus';
//import Menus from './Details';
import {DISHES} from './Dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {COMMENTS} from './Comments';
import {PROMOTIONS} from './Promotions';
import {LEADERS} from './Leaders';
import Contact from './Contact';
import {Route,Switch,Redirect} from 'react-router-dom';

class Main extends React.Component{
  
  constructor(props){
    super(props);
  this.state={
    dishes:DISHES,
    promotions : PROMOTIONS,
    comments:COMMENTS,
    leaders:LEADERS
  }
}
HomePage(){
    return(
        <div>
            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                   promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                   leader={this.state.leaders.filter((l) => l.featured)[0]} 
                   />
        </div>
    )
 }
ContactPage(){
  return(
      <div>
          <Contact />
      </div>
  )
}
DishWithId=({match}) =>{
    return(
      <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
};
AboutPage(){
  return(
    <div>
      <About leaders={this.state.leaders} />
    </div>
  )
}

  render(){
  return(
    <div>
         <Header />
         <Switch>
    <Route path='/home' component={() =>this.HomePage()} />
    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
    <Route path='/menu/:dishId' component={this.DishWithId} />
    <Route exact path='/contactus' component={() => this.ContactPage()} />
    <Route exact path='/about' component={() => this.AboutPage()} />
    <Redirect to="/home" />
      </Switch>
      <Footer />
  </div>    
  );
}
}
export default Main;