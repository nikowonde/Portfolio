import React from 'react';

const Searchbar = (props) => {

    return (
        <div>
                <input type='text' name='search' onChange={props.handleInputChange}/>
                <button type='Submit' value='submit' onClick={props.handleSubmission}>Submit</button>
        </div>
    )
}


export default Searchbar;