import React from 'react';
import logo from './logo.svg';


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
    }
    textChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }
    submission = (e) =>{
        alert(`${this.state.name} ${this.state.email} ${this.state.password}`);
       // e.preventDefault();
    }
    render(){
        return(
            <div>
                <div>
                    <img src={logo} widht="100" height="100"></img>
                </div>
                <form onSubmit={this.submission}>
                    <div>
                        <label htmlFor="name">Name :  </label>
                        <input type="text" id="name" value={this.state.name} required
                                onChange={this.textChange}></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">e-mail :  </label>
                        <input type="text" id="email" value={this.state.email} required
                                onChange={this.textChange}></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password :  </label>
                        <input type="password" id="password" value={this.state.password} required
                                onChange={this.textChange}></input>
                    </div>
                    <br />
                    <button type="submit">Submit</button>



                </form>
            </div>
        )
    }
}

export default Form;