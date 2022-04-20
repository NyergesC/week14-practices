import React, { Component } from 'react'


class ButtonWithClass extends Component {
    constructor(){
        // super() köti össze a construktoron belüli dolgokat a class-ok között (mivel extends használunk)
        super()
        this.state = {
            key1: 'This is the default state of Class Component',
            key2: 0
        }
    };
    render() {
        return (
            <>
            <div>{this.state.key1}</div>
            <button onClick={() => this.setState({key1: 'This is the default state of Class Component CLICKED'})}>CLICK</button>
            <button onClick={() => this.setState({key2:1})}></button>
            </>
        );
    };
};

export default ButtonWithClass
