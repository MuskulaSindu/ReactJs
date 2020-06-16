import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import DishDetails from './Components/DishDetails';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:"",
            isok :false
        };
    }
    OnDish(dish){
        this.setState({
            selectedDish:dish,
            isok:true
        })
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5  m-1">
                  <Card onClick={() => this.OnDish(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                  </Card>
              </div>
            );
        });
        if(this.state.isok===true){
        return (
          <div className="container">
            <div className="row">
              
                  {menu}
              
            </div>
            <DishDetails dish={this.state.selectedDish} />
            </div>
        );
        }
        else{
            return(
                <div className="container">
            <div className="row">
              
                  {menu}
              
            </div>
            </div>
            )
        }
    }
}

export default Menu;