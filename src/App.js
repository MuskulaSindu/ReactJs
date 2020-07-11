import React from 'react';
//import Shopping from './Shopping';
//import Form from './Form';
//import Boot from './Boot';
//import {Navbar,NavbarBrand} from 'reactstrap';
import Main from "./Components/Main";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store=ConfigureStore();

class App extends React.Component{
  render(){
  return(
    <Provider store={store}>
    <BrowserRouter>
    <div>
         <Main />
  </div>
  </ BrowserRouter>
  </Provider>   
  );
}
}
export default App;