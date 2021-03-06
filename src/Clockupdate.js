import { Component } from "react";

class Clockupdate extends Component {
    constructor(props){
        super(props)
        this.date = new Date();
        this.state = {
            date:new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            ()=> this.tick(), 1000
        );
    }

    tick() {
        this.setState({
            date: new Date()

        })
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    render() {
        return(
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }

};










export default Clockupdate;