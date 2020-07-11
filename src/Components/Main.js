import React from 'react';
//import Shopping from './Shopping';
//import Form from './Form';
//import Boot from './Boot';
//import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from "./Menu";
import DishDetails from './DishDetails';
import About from './Aboutus';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import Contact from './Contact';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends React.Component{
  
  constructor(props){
    super(props);
 
}
HomePage(){
    return(
        <div>
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                   promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                   leader={this.props.leaders.filter((l) => l.featured)[0]} 
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
      <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
};
AboutPage(){
  return(
    <div>
      <About leaders={this.props.leaders} />
    </div>
  )
}

  render(){
  return(
    <div>
         <Header />
         <Switch>
    <Route path='/home' component={() =>this.HomePage()} />
    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
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
export default withRouter(connect(mapStateToProps)(Main));