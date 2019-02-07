import React from 'react';
import { connect } from 'react-redux';
import { fetchFox } from '../store/actions/imageActions';


const FoxesPage = (props) => {
    const fox = props.fox;
    if (!fox) {
        return <div className='container'>
                    <p>Loading...</p>
                    <button className='button' onClick={props.fetchFox}>Get a fox image</button>
                </div>
    } else {
    return <div>
                <div className='container'>
                    <img className='Pic' src={props.fox} alt='Dog'/>
                </div>
                <div className='container'>
                    <button className='button' onClick={props.fetchFox}>Get new fox image</button>
                </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        fox: state.images.fox
    };
}




export default connect(mapStateToProps, { fetchFox })(FoxesPage);