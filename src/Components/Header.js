import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron ,
        Button,Modal,ModalBody,ModalHeader, Input, Form, FormGroup,Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{
   constructor(props){
        super(props);
        this.state={
            isClicked : false,
            isModalOpen:false
        }
   }
   Click(){
       this.setState({
           isClicked : !this.state.isClicked
       })
   }
   ButtonClick(){
       this.setState({
           isModalOpen :!this.state.isModalOpen
       })
   }
   HandleForm=(event)=>{
        this.ButtonClick();
        alert(`username ${this.username.value}password ${this.password.value}remember ${this.remember.checked}`);
        event.preventDefault();
   }
    render(){
        return(
                <div>
                        <Navbar dark color="primary" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={() =>this.Click()} />
                            <NavbarBrand className="mr-auto" href='/'>
                                <img src="assets/images/logo.png" height="30" width="41" alt="" />
                                </NavbarBrand>
                    <Collapse isOpen={this.state.isClicked}  navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/Home">
                                    <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/Menu">
                                    <i className="fa fa-list fa-lg" /> Menu
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fa fa-info fa-lg" /> About Us
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                        
                            <Button onClick={()=>this.ButtonClick()}><i className="fa fa-sign-in fa-lg" />LOGIN</Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                    </Navbar>
                    <div>
                        <Jumbotron>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-5 m-1">
                                        <h3>Restorante Con Fusion</h3>
                                        <p>this is menu block</p>
                                    </div>
                                </div>
                            </div>
                        </Jumbotron>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} >
                        <ModalHeader >LOGIN</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.HandleForm}>
                                <FormGroup>
                            <Label htmlFor="username" >Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username=input} ></Input>
                            </FormGroup>

                            <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password=input} ></Input>
                            </FormGroup>
                            
                            <FormGroup check>    
                            <div className="col-12">
                           <Input type="checkbox" name="remember"
                           innerRef={(input) => this.remember=input}></Input>
                           remember me
                           </div>
                           </FormGroup>
                           <br />
                           <div className="col-12">
                           <Button type="submit" color="primary">Submit</Button>
                        </div>
                        </Form>
                        </ModalBody>
                    </Modal>
                    </div>
        )
    }
}
export default Header;