import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//import DishDetails from './DishDetails';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: "",
            isok: false
        };
    }
    Menus(isLoading,errMess){
        const menu = this.props.dishes.dishes.map((dish) => {
            return (<div key={dish.id} className="col-12 col-md-5  m-1">
                <Card  >
                    <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>
            </div>);
        });

        if (isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        return menu;
    }
    
    render() {
        const isLoading=this.props.dishes.isLoading;
        const errMess=this.props.dishes.errMess;

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
                    {this.Menus(isLoading,errMess)}
                    </div>
            </div>);
    }
}
export default Menu;
