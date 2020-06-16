import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//import DishDetails from './DishDetails';
import { Link } from 'react-router-dom';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: "",
            isok: false
        };
    }
    Menus(){
        const menu = this.props.dishes.map((dish) => {
            return (<div key={dish.id} className="col-12 col-md-5  m-1">
                <Card  >
                    <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>
            </div>);
        });
        return menu;
    }
    
    render() {
        

            return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/home">HOME</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                    </div>
                    </div>
                    <div className="row">
                    {this.Menus()}
                    </div>
            </div>);
    }
}
export default Menu;
