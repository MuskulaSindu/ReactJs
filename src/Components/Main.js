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
import { actions } from 'react-redux-form';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes , fetchComments, fetchPromos } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())

});


class Main extends React.Component{
  
  constructor(props){
    super(props);
 
}

componentDidMount() {
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
}
HomePage(){
    return(
        <div>
            <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                   dishesLoading={this.props.dishes.isLoading}
                   dishesErrMess={this.props.dishes.errMess}

                   promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                   promoLoading={this.props.promotions.isLoading}
                   promoErrMess={this.props.promotions.errMess}

                   leader={this.props.leaders.filter((l) => l.featured)[0]} 
                   />
        </div>
    )
 }
ContactPage(){
  return(
      <div>
          <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
      </div>
  )
}
DishWithId=({match}) =>{
    return(
      <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess}
    
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} />
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));