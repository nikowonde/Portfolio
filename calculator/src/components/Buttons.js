import React from 'react';
import ButtonsCss from './buttons.module.css';

/*class Buttons extends Component {
    render(){
        return <div className={ButtonsCss.Buttons}>{this.props.children}</div>
    }
}*/

const Buttons = (props) => {
    return (
    <div className={ButtonsCss.Buttons}>{props.children}</div>
    )
}

export default Buttons;