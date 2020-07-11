import React from 'react';
import { Route, Redirect,NavLink } from 'react-router-dom';
import {NavItem,Nav,navbar} from 'reactstrap';
import Loginshop from './Loginshop';
import ShopList from './ShopList';

class Mainshop extends React.Component{
    constructor(props){
        super(props)
    }
    list(){
        return(
            <div>
                <ShopList />
            </div>
        )
    }
    login(){
        return(
            <div>
                <Loginshop />
            </div>
        )
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <h1>Hii Welcome to our page!</h1>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-2">
                    <strong>Here is the link to login our page :</strong>
                    </div>
                
            <Nav navbar>
                        <NavItem>
                    <NavLink className="nav-link" to="/login"><h1>LOGIN</h1></NavLink>
                    </NavItem>
                    </Nav>
                    </div>
             <Route path='/login' component={() => this.login() } />       
            <Route path='/shoplist' component={() => this.list()} />
            <Redirect to="/home"/>
            </div>
        )
    }
}
export default Mainshop;