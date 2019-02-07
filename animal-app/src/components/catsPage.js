import React from 'react';
import { connect } from 'react-redux';
import { fetchCat } from '../store/actions/imageActions';


const CatsPage = (props) => {
    const cat = props.cat;
    const lastFour = cat.substr(cat.length - 4);
    if (!cat) {
        return <div className='container'>
                    <p>Loading...</p>
                    <button className='button' onClick={props.fetchCat}>Get a cat image</button>
                </div>
    } else if (lastFour === 'webm') {
        return  <div className='container'>
                    <p>Bad file format,<br /> please Get new cat image</p>
                    <button className='button' onClick={props.fetchCat}>Get new cat image</button>
                </div>
    } else {
    return <div>
                <div className='container'>
                    <img className='Pic' src={props.cat} alt='Cat'/>
                </div>
                <div className='container'>
                    <button className='button' onClick={props.fetchCat}>Get new cat image</button>
                </div>
            </div>
    }
}
/*let tmpCat = null;

const handleClick = (props) =>{
    catRequest();
    handleDispatch();
}*/
//const handleDispatch = (props) => props.handleCatRequest(tmpCat);

/*const catRequest = () => {
    Axios.get('http://aws.random.cat/meow')
    .then((response) => {
            tmpCat = response.data.file
        console.log(response.data.file)
    })
    .catch((err) => console.log(err));
}
catRequest();*/

const mapStateToProps = state => {
    return {
        cat: state.images.cat
    };
}




export default connect(mapStateToProps, { fetchCat })(CatsPage);

