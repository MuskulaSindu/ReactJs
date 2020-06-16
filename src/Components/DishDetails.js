import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';



class DishDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderDish(dish) {
        if (dish !== '') {
            return (<div className='col-12 col-md-5'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>);
        }
        else {
            return (<div></div>);
        }
    }
    renderComments(comments){
        if(comments!==""){
        if(comments.length===0){
            return(
                <div></div>
            )
        }
    }
    if(comments!==""){
        return(
         comments.map(item =>{
             return(
                 <div key={item.id}>
                         <div>
                         <p>{item.comment}</p>
                         </div>
                         <div>
                             <p>-- {item.author}, {item.date}</p>
                         </div>
                         </div>
             )
         })
        )
    }

    }
    render() {
        const dish  = this.props.dish;
        const comments=this.props.comments;
        return (
        <div>
                 <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{dish.name}</h3><hr />
                    </div>
                </div>



            <div className="row">
            {this.renderDish(dish)}
                    <div className="col-12 col-md-5 ml-2">
                        <div>
                    <h4>Comments</h4>
                    </div>
                {this.renderComments(comments)}
                </div>
            </div>
            
            </div>
        </div>);
    }
}
export default DishDetails;