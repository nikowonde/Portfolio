//import React, { Component } from 'react';
import React from 'react';
import Buttoncss from './button.module.css'

/*class Button extends Component {
    render(){
        return (
            <div
            onClick={this.props.onClick}
            className={Buttoncss.Button}
            data-size={this.props.size}
            data-value={this.props.value}
            >
            {this.props.label}
            </div>
        )
        
    }
}*/

const Button = (props) => {
    return (
        <td  onClick={props.onClick}
        className={Buttoncss.Button}
        data-size={props.size}
        data-value={props.value}>
            {props.label}
        </td>
    )
}

export default Button;