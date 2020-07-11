import React from 'react';
import {Form, FormGroup,Label, Input, Button, Navbar,Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Loginshop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email : "",
            password : ""
        }
    }
    updateInput = (event) =>{
        const target=event.target
        const value=target.value
        const name=target.name
        this.setState({
                [name] : value
        })
       
    }
    submission(){
        alert('email is '+this.state.email +" and password is "+this.state.password);
    }
    render(){
        return(
            <div>
                <div className="container">
                <Form onSubmit={()=>this.submission()}>
                    <br />
                    <br />
                    <FormGroup row>
                        <div className="col-md-4"></div>
                    <h1>LOGIN</h1>
                    </FormGroup>
                    <FormGroup row>
                    
                        <div className="col-md-3"></div>
                        <Label htmlFor="email" className="email">E-Mail</Label>
                        <div className="mr-5"></div>
                        <Input type="text" id="email" name="email" className="col-md-4" placeholder="mail@example.gmail" required
                        value={this.state.email} onChange={this.updateInput} />
                    </FormGroup>

                    <FormGroup row>
                    <div className="col-md-3"></div>
                        <Label htmlFor="password" className="password">Password</Label>
                        <div className="mr-4"></div>
                        <Input type="password" id="password" name="password" className="col-md-4" placeholder="" required
                        value={this.state.password} onChange={this.updateInput} />
                    </FormGroup>

                    <FormGroup row>
                    <div className="col-md-5"></div>
                    <Nav navbar>
                        <NavItem>
                    <NavLink className="nav-link" to="/shoplist"><Button type="submit" color="primary" >SUBMIT1</Button></NavLink>
                    </NavItem>
                    </Nav>
                    </FormGroup>
                </Form>
                </div>
            </div>
        )
    }
}
export default Loginshop;