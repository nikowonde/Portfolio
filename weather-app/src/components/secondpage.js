import React from 'react';
import HomeCSS from './home.module.css';

const Secondpage = (props) => {
    const cityData = props.cityData;
    if (!cityData) {
        return <div className={HomeCSS.second}> 
            <span>
                <h4>Check weather for city of choice: </h4> <input type='text' id='cityInput' required placeholder='Enter city here!' onChange={props.cityInput}/>
                <button type='submit' value='submit' onClick={props.handleInputSubmission}>Submit</button>
            </span> 
            </div>
    } else {
        return (
            <div className={HomeCSS.second}>
                <span>
                    <h4>Check weather for city of choice: </h4> <input type='text' required placeholder='Enter city here!' onChange={props.cityInput}/>
                    <button type='submit' value='submit' onClick={props.handleInputSubmission}>Submit</button>
                </span> 
               <span>
                   <table className={HomeCSS.table}>
                       <tbody>
                           <tr>
                            <td>{`Current weather for ${props.cityData.name} in coordinates ${props.cityData.coord.lat} & ${props.cityData.coord.lon}`}</td>
                           </tr>
                           <tr>
                            <td>{`Temperature is ${props.cityData.main.temp}°C `}</td>
                           </tr>
                           <tr>
                            <td>{`Visibility is ${props.cityData.visibility}m `}</td>
                           </tr>
                           <tr>
                            <td>{`Humidity is ${props.cityData.main.humidity}%`}</td>
                           </tr>
                           <tr>
                            <td>{`Air pressure is ${props.cityData.main.pressure}hPa`}</td>
                           </tr>
                           <tr>
                            <td>{`Wind speed is ${props.cityData.wind.speed}m/s `}</td>
                           </tr>
                       </tbody>
                   </table>
               </span>
            </div>
        )
    }
}

export default Secondpage;