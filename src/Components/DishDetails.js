import React from 'react';
import { Input, Form, FormGroup,Card, CardImg, CardText,Modal,CardBody, CardTitle,BreadcrumbItem,Breadcrumb, Button, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { LocalForm, Control ,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class DishDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
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
                 <div>
                 <div key={item.id}>
                         <div>
                         <p>{item.comment}</p>
                         </div>
                         <div>
                             <p>-- {item.author}, {item.date}</p>
                         </div>
                         </div>
                         </div>
             )
             
         })
        )
    }

    }
    HandleComment(addComment,dishId){
        console.log(dishId);
        return(
            <Modal isOpen={this.state.isModalOpen} >
            <ModalHeader >Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values)=>this.Handle(values,addComment,dishId)}>
                <div className="form-group">
                <Label htmlFor="rating" >Rating</Label>
                <Control.select model=".rating" id="rating" name="rating"
                 className="form-control">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     </Control.select>
                </div>
                    <div className="form-group">
                <Label htmlFor="username" >Your Name</Label>
                <Control.text model=".username" id="username" name="username" placeholder="Your Name"
                 className="form-control"
                 validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                }}
                 />
            <Errors
                className="text-danger"
                model=".username"
                show="touched"
                messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                }}
             />
                </div>
                <div className="form-group">
                <Label htmlFor="msg" >Comment</Label>
                <Control.textarea model=".msg" rows="6" id="msg" name="msg"
                 className="form-control"/>
                </div>
               
               <div className="form-group">
               <Button type="submit" color="primary">Submit</Button>
                </div>
            </LocalForm>
            </ModalBody>
        </Modal>
        )
    }
    Handle(values,addComment,dishId){
        console.log(dishId);
        this.HandleSubmit();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        addComment(dishId, values.rating, values.username, values.msg);
    }
    HandleSubmit(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render() {
        const dish  = this.props.dish;
        const comments=this.props.comments;
        const addComment=this.props.addComment;
        const dishId= this.props.dish.id;
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
        <Button onClick={() => this.HandleSubmit()}><i className="fa fa-pencil"></i>{"    "}Submit Comment</Button>
         {this.HandleComment(addComment,dishId)}
                </div>
            </div>
            
            </div>
        </div>);
    }
}
export default DishDetails;