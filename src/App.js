import React from 'react';
//import Shopping from './Shopping';
//import Form from './Form';
//import Boot from './Boot';
//import {Navbar,NavbarBrand} from 'reactstrap';
import Main from "./Components/Main";
import {BrowserRouter} from 'react-router-dom';
//import Menus from './Details';
import File from './Components/File';
import './App.css';


class App extends React.Component{
  render(){
  return(
    <BrowserRouter>
    <div>
         <Main />
  </div>
  </ BrowserRouter>   
  );
}
}
export default App;