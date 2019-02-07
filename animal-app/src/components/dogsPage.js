import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from '../store/actions/imageActions';


const DogsPage = (props) => {
    const dog = props.dog;
    const lastFour = dog.substr(dog.length - 4);
    const lastThree = dog.substr(dog.length - 3);
    if (!dog) {
        return <div className='container'>
                    <p>Loading...</p>
                    <button className='button' onClick={props.fetchDog}>Get a dog image</button>
                </div>
    } else if (lastFour === 'webm') {
        return  <div className='container'>
                    <iframe src={props.dog} frameBorder='no' title='dog'></iframe>
                    <button className='button' onClick={props.fetchDog}>Get new dog image</button>
                </div>
    }else if (lastThree === 'mp4') {
        return  <div className='container'>
                    <iframe src={props.dog} frameBorder='no' title='dog'></iframe>
                    <button className='button' onClick={props.fetchDog}>Get new dog image</button>
                </div>
    } else {
    return <div>
                <div className='container'>
                    <img className='Pic' src={props.dog} alt='Dog'/>
                </div>
                <div className='container'>
                    <button className='button' onClick={props.fetchDog}>Get new dog image</button>
                </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        dog: state.images.dog
    };
}




export default connect(mapStateToProps, { fetchDog })(DogsPage);

