import React, { Component } from 'react';

import Digitalfunctional from './Digitalfunctional';

class Method extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            counter : 0
     
        };
        // this.updateTime();
    }
    componentDidMount() {
        console.log("compount did"); 
        this.updateTime();
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    facebookLinkMethod(){
        return 'https://www.facebook.com/';
    }

    facebookTextMethod(){
        return 'facebook';
    }

    updateTime(){
        setInterval(() => { 
            this.setState({
                time: new Date().toLocaleTimeString(),
                counter: this.state.counter + 1
            });
            
        }, 1000);
        return this.state.time;
    }

    render() {
        return(
            <div>
                <a href={this.facebookLinkMethod()}> {this.facebookTextMethod()}</a>
                <h2>It is {this.state.time} .</h2>
                {/* <h2>It is {this.state.counter} .</h2> */}

                <Digitalfunctional time={this.state.time} />
                <h2>No of time updated: {this.state.counter} </h2>
            </div>
        )      
    }
}

export default Method;
