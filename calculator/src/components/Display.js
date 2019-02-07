import React, { Component } from 'react';
import displayCSS from './display.module.css';

class Display extends Component{
    render() {
        const string = this.props.data.join('')
        return <div className={displayCSS.display}>{string}</div>
    }
}

export default Display;