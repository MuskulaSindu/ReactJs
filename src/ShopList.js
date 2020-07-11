import React from 'react';
import logo from './logo.svg';
import {Button} from 'reactstrap';

class ShopList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newItem : "",
            list:[]
        }
    }
    updateInput =(event) =>{
        const target=event.target
        this.setState({newItem:target.value});
      }
    addItem(){
       const mylist=[...this.state.list]
       const todovalue=this.state.newItem
       if(todovalue!==''){
        const item={
            id :Math.random(),
            value : todovalue
        }
        mylist.push(item);
        this.setState({
            list:mylist,
            newItem : ""
        })
    }
}
    delete(id){
        const mylist=[...this.state.list]
        const updatedlist=[]
        for(var i=0;i<mylist.length;i++){
            if(mylist[i].id !=id)
                updatedlist.push(mylist[i]);
        }
        this.setState({
            list: updatedlist
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <img src={logo} alt="logo" widht="100" height="100" />
                    <div className="row">
                    <input type="text" id="newItem" name="newItem"  placeholder="write a todo" required
                value={this.state.newItem}
                onChange={this.updateInput}
                />
                        
                        <div className="mr-2" />
                        
                        <Button type="submit" color="primary" onClick={() =>this.addItem()} >Click me</Button> 
                    </div>
                    {this.state.list.map(item =>{
                        return(
                            <div>
                            <ul>
                               <br />
                                <div className="row">
                                <li key= "item.id">{item.value}</li>
                                <div className="mr-2" />
                                <Button type="submit" onClick={() => this.delete(item.id)}>Delete</Button>
                                </div>
                            </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
export default ShopList;