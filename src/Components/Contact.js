import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem, FormGroup, Label,Form,Input, Button, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname : "",
            lastname :"",
            telnum:"",
            email:"",
            agree :"",
            contactType : "",
            message :"",
            touched :{
                firstname:false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
    }
    handleBlurr =(field) =>(event) =>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }
    Validate= (firstname,lastname,email,telnum) =>{
        const errors={
            firstname:"",
            lastname:"",
            email:"",
            telnum:""
        }
        if(this.state.touched.firstname && firstname.length<3)
        errors.firstname="name should be >=3";
        else if(this.state.touched.firstname && firstname.length>10)
        errors.firstname="name should be <10";

        if(this.state.touched.lastname && lastname.length<3)
        errors.lastname="name should be >=3";
        else if(this.state.touched.lastname && lastname.length>10)
        errors.lastname="name should be <10";

        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
        errors.telnum="number should contains integers";
        else if(this.state.touched.telnum && reg.test(telnum) && telnum.length!==10)
        errors.telnum="should be 10 integers";

        if(this.state.touched.email && email.split('').filter(x => x==='@').length!==1)
        errors.email="not valid email";

        return errors;



    }
    Changehandler=(event) =>{
        const target=event.target;
        //const value=target.value==="checkbox"? target.checked:target.value;
        const value=target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
    }
    HandleSubmit=(event) =>{
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    ChangehandlerCheckbox=(event) =>{
        this.setState({
            agree : !this.state.agree
        })
    }
    
    render(){
        const errors=this.Validate(this.state.firstname,this.state.lastname,this.state.email,this.state.telnum);
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
                <Form onSubmit={this.HandleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="firstname" className="col-md-1">FirstName:</Label>
                        <div className="col-md-8" >
                        <Input type="text" id="firstname" name="firstname" value={this.state.firstname} 
                                placeholder="First Name" 
                                valid={errors.firstname===''}
                                invalid={errors.firstname!==''}
                                onBlur={this.handleBlurr('firstname')}
                                onChange={this.Changehandler}/>
                          <FormFeedback>{errors.firstname}</FormFeedback>
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="lastname" className="col-md-1">LastName:</Label>
                        <div className="col-md-8" >
                        <Input type="text" id="lastname" name="lastname" value={this.state.lastname} 
                                placeholder="Last Name"
                                valid={errors.lastname===''}
                                invalid={errors.lastname!==''}
                                onBlur={this.handleBlurr('lastname')}
                                onChange={this.Changehandler} />
                          <FormFeedback>{errors.lastname}</FormFeedback>
                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="telnum" className="col-md-1">TelNum:</Label>
                        <div className="col-md-8" >
                        <Input type="text" id="telnum" name="telnum" value={this.state.telnum} 
                                placeholder="Telnum"
                                valid={errors.telnum===''}
                                invalid={errors.telnum!==''} 
                                onBlur={this.handleBlurr('telnum')}
                                onChange={this.Changehandler}/>
                        <FormFeedback>{errors.telnum}</FormFeedback>
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="email" className="col-md-1">email:</Label>
                        <div className="col-md-8" >
                        <Input type="text" id="email" name="email" value={this.state.email} 
                                placeholder="email" 
                                valid={errors.email===''}
                                invalid={errors.email!==''}
                                onBlur={this.handleBlurr('email')}
                                onChange={this.Changehandler}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <FormGroup check>
                            <div className="col-md-12">
                            <Input type="checkbox" name="agree" checked={this.state.agree}
                            onChange={this.ChangehandlerCheckbox}></Input>
                            <strong>We may Contact You?</strong>
                            </div>
                        </FormGroup>
                        <div className="col-md-3 offset-2">
                            <Input type="select" name="contactType" value={this.state.contactType}
                            onChange={this.Changehandler}>
                            <option>TelNum</option>
                            <option>email</option>
                            </Input>
                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" className="col-md-1">Message:</Label>
                        <div className="col-md-8">
                            <Input type="textarea" rows="8" id="message" name="message" value={this.state.message} 
                            onChange={this.Changehandler}/>
                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <div className="col-md-4"></div>
                        <Button type="submit" color="primary" className="col-md-2 offest-3">Feedback</Button>
                    </FormGroup>
                    

                </Form>
            </div>


        </div>
        )
    }
}
export default Contact;