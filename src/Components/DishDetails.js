import React from 'react';
import { Input, Col,Form, FormGroup,Card, CardImg, CardText,Modal,CardBody, CardTitle,BreadcrumbItem,Breadcrumb, Button, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { LocalForm, Control ,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleComment = this.toggleComment.bind(this);
    }

    toggleComment() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleComment();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId,values.rating,values.yourname,values.message);
    }

    render(){
        return (
            <>
            <Button outline onClick={this.toggleComment}>
                Submit Comment 
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCpmment}>
            <ModalHeader toggle={this.toggleComment}>
                Submit Comment
            </ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col > Rating
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col> Your Name
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col > Comment
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
            </ModalBody>
        </Modal>
        </>
        )
    }
}


    function RenderDish({dish}) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    function RenderComments({comments,addComment,dishId}) {
       // console.log(comments)
        if (comments != null)
            return (
                <div>
                    <h4>Comments</h4>
                    {comments.map((comment, i) => {
                        return (
                            <div key={i}>

                                <ul className="list-unstyled">
                                    <li>{comment.comment}</li>
                                    <br />
                                    <li> -- {comment.author} , {new Date(comment.date).toDateString()} </li>
                                </ul>
                            </div>
                        )
                    })}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

        const DishDetails = (props) => {
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if(props.dish != null){
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                        />
                    </div>
                </div>
                </div>
        );
        }
        else {
            return (
                <div></div>
            )
        }
    }


export default DishDetails;