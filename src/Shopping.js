import React from 'react';
import logo from './logo.svg';
import './App.css';

class Shopping extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem : "",
      list:[]
    }
  }
  addItem(todoValue){
    const mylist=[...this.state.list];
    let n=mylist.length;
    
    
    if(todoValue!==""){
      const item={
        id:Math.random(),
        value:todoValue
      }
     
      mylist.push(item);
      this.setState({
        list:mylist,
        newItem:""
      })
    }
  }
  deleteItem(id){
    const list=[...this.state.list];
    //const updatedlist=list.filter(item => item.id!==id);
    
    const updatedlist=[]
    for(let i=0;i<list.length;i++){
      if(list[i].id!==id)
      updatedlist.push(list[i]);
    }
    this.setState({list:updatedlist});

  }
  updateInput(value){
    this.setState({newItem:value});
  }



  render(){
  return(
    <div>
      <img src={logo} alt="logo"
      width="100" height="100" className="App-logo"/>
      <h1 className="title">ToDo App</h1>
      <div className="container">
        Add an item....
        <br />
        <input type="text" className="input-text" placeholder="write a todo" required
                value={this.state.newItem}
                onChange={e => this.updateInput(e.target.value)}
                />
        <button className="add-btn"
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
                >Add ToDo</button>
        <div className="list">
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="btn"
                          onClick={() => this.deleteItem(item.id)}
                          >Delete</button>
                </li>
              )
            })}
            <p> there are {this.state.list.length} items</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
}
export default Shopping;