import React from 'react';
import { Button, Navbar, NavbarBrand, NavItem, NavLink ,Nav} from 'reactstrap';
import {Link,Route} from 'react-router-dom';
import Main from './Main';
import Contact from './Contact'; 

class File extends React.Component{
    constructor(props){
        super(props);
    }
    MainPage(){
        return(
            <div>
                <Main />
            </div>
        )
    }
    ContactPage(){
        return(
            <div>
                <Contact />
            </div>
        )
      }

    render(){
        return(
                <div>
                    <Navbar color="primary">
                        <div className='col-md-5'></div>
                        <div className="col-md-7">
                           <h2>WELCOME</h2>
                        </div>
                    </Navbar>
                    <br />
                    <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-7">
                    <NavLink  classname="nav-link" to='/main'><Button type="submit">CLICK ME!</Button></NavLink>
                    </div>
                    </div>
                    <Route path='/main' component={()=>this.MainPage()} />
                    <Route exact path='/contactus' component={() => this.ContactPage()} />


                </div>


        )
    }
}
export default File;