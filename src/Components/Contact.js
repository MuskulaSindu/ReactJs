import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem, FormGroup, Label,Form,Input, Button, FormFeedback, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm, Errors} from 'react-redux-form';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component{
    constructor(props){
        super(props);
        
    }
    HandleSubmit=(values) =>{
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>


            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div >
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div >
                <div className="col-12 ">
                    <h3>Send us Your Feedback</h3>
                </div><br /><br />
                <LocalForm onSubmit={(values) => this.HandleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" className="col-md-1">FirstName:</Label>
                        <div className="col-md-8" >
                        <Control.text model=".firstname" id="firstname" name="firstname" 
                                placeholder="First Name" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </div>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="lastname" className="col-md-1">LastName:</Label>
                        <div className="col-md-8" >
                        <Control.text  model=".lastname" id="lastname" name="lastname"  
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </div>
                        </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" className="col-md-1">TelNum:</Label>
                        <div className="col-md-8" >
                        <Control.text model=".telnum" id="telnum" name="telnum"  
                                placeholder="Telnum"
                              className="form-control" 
                              validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".telnum"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 numbers',
                                maxLength: 'Must be 15 numbers or less',
                                isNumber: 'Must be a number'
                            }}
                         />
                        </div>
                        </Row>

                    <Row className="form-group">
                        <Label htmlFor="email" className="col-md-1">email:</Label>
                        <div className="col-md-8" >
                        <Control.text model=".email" id="email" name="email"  
                                placeholder="email" 
                               className="form-control" 
                               validators={{
                                required, validEmail
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                         />
                        </div>
                        </Row>

                    <Row className="form-group">
                        <div className="form-check">
                            <div className="col-md-12">
                            <Control.checkbox model=".agree" name="agree" 
                            className="form-check-input" />
                            <strong>We may Contact You?</strong>
                            </div>
                        </div>
                        <div className="col-md-3 offset-2">
                            <Control.select model=".contactType" name="contactType" 
                            className="form-control">
                            <option>TelNum</option>
                            <option>email</option>
                            </Control.select>
                        </div>
                        </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" className="col-md-1">Message:</Label>
                        <div className="col-md-8">
                            <Control.textarea model=".message" rows="8" id="message" name="message"  
                            className="form-control"/>
                        </div>
                        </Row>
                    <Row className="form-group">
                        <div className="col-md-4"></div>
                        <Button type="submit" color="primary" className="col-md-2 offest-3">Feedback</Button>
                        </Row>
                    

                </LocalForm>
            </div>


        </div>
        )
    }
}
export default Contact;