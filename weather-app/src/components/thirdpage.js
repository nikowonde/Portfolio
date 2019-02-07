import React from 'react';
import HomeCSS from './home.module.css';

const Thirdpage = (props) => {
    const cData1 = props.cities1;
    const cData2 = props.cities2;
    if (!cData1 && !cData2) {
        return (
            <div className={HomeCSS.third}>
                <span>
                    <h4>Compare cities: </h4> 
                    <input type='text' required placeholder='Enter city here!' onChange={props.citiesInputChange1}/>
                    <input type='text' required placeholder='Enter Another city!' onChange={props.citiesInputChange2}/>
                    <button type='submit' value='submit' onClick={props.weatherCompare1}>Submit</button>
                </span> 
            </div>
        )
    } else {
        return (
            <div className={HomeCSS.third}>
                <span>
                    <h4>Compare cities: </h4> 
                    <input type='text' required placeholder='Enter city here!' onChange={props.citiesInputChange1}/>
                    <input type='text' required placeholder='Enter Another city!' onChange={props.citiesInputChange2}/>
                    <button type='submit' value='submit' onClick={props.weatherCompare1}>Submit</button>
                </span> 
            </div>
        )
    }
}

export default Thirdpage;