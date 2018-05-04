import React, { Component } from "react";
import { Radio } from 'react-bootstrap';


class CheckBox extends React.Component {


    render() {
        return (
            <div style={{width: 223, height: 44, display: 'block', margin: 'auto'}}>
            <div style={{verticalAlign: 'text-top', display: 'inline-block'}}><input type="radio" onChange={this.props.onChange}></input></div>
            <div style={{ width: 205, height: 44, textAlign: 'center', display: 'inline-block', fontSize: 12, fontFamily: 'SF Display Regular'}}>I understand I am using alpha software, at my own risk, provided under MIT liscence.</div>
    </div>
        );
    }
}


export default CheckBox;
