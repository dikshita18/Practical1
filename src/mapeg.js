
import React from 'react'

class List_value extends React.Component {
    state ={
        list_array : ["Google", "Facebook", "Amazon"],
    };

    render() {
        return(
            <React.Fragment>
                <ul>
                    {this.state.list_array.map((list_item) => <li key ={list_item} value={list_item}>{list_item}</li>)}
                
                    <br />
                <button type="button" onClick={() => this.setState({list_array: this.state.list_array.sort()})}>Sort List</button> 
                
                </ul>
            </React.Fragment>
        );
    }
}


export default List_value;

/*
import React from 'react'

class List_value extends React.Component {
    state ={
        list_array : ["Google", "Facebook", "Amazon"],
    };

    render() {
        return(

            <React.Fragment>
                
                <ul>
                    {this.state.list_array.map((list_item) => <li key ={list_item} value={list_item}>{list_item}</li>)}
                </ul>
                
                <button type="button" onClick={() => this.setState({list_array: this.state.list_array.sort()})}>Click me!</button> 
                
                <button onClick={()=>{throw new Error("Custom Error")}}>Sort</button> 
            </React.Fragment>
        );
    }
}


export default List_value;
*/