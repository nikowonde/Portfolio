import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import HomeCSS from './home.module.css';

const Homepage = (props) => {
    if (props.forecastData && props.data) {
    const temperature = props.forecastData.map(el => ({x: el.dt, y: el.main.temp}));
    const humidity = props.forecastData.map(el => ({x: el.dt, y: el.main.humidity}));
    const city = props.data.city.name;
    return (
        <div className={HomeCSS.home}>
            <h2>{`Five day weather for ${city}`}</h2>
            <h4>{`Temperature`}</h4>
            <XYPlot className={HomeCSS.Grid} height={250} width={800} xDomain={[temperature[0].x -3600 * 6, temperature[temperature[39]]].x}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis 
                        title='Time'
                        tickValues={[
                            temperature[0].x, temperature[6].x, temperature[12].x, temperature[18].x, temperature[24].x, temperature[30].x, temperature[36].x 
                        ]}
                        tickFormat={(value) => {
                           let tmp = props.forecastData.filter(listElement => listElement.dt === value);
                           return tmp[0].dt_txt.substring(5, 16)
                        }
                    }
                    />
                    <YAxis
                        title='Temperature'
                        className={HomeCSS.color}
                    />
                <LineSeries data={temperature} color='#ff0000' style={{strokeWidth: 5}} />
            </XYPlot>
            <h4>{`Humidity`}</h4>
            <XYPlot className={HomeCSS.Grid} height={250} width={800}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis 
                    title='Time'
                    tickValues={[
                        temperature[0].x, temperature[6].x, temperature[12].x, temperature[18].x, temperature[24].x, temperature[30].x, temperature[36].x 
                    ]}
                    tickFormat={(value) => {
                        let tmp = props.forecastData.filter(listElement => listElement.dt === value);
                        return tmp[0].dt_txt.substring(5, 16)
                     }
                    }
                     />
                    <YAxis 
                     title='Humidity'
                    />
                <LineSeries data={humidity} color='	#FF1493' style={{strokeWidth: 5}} />
            </XYPlot>
        </div>
    )
    } else {
        return (<p>Loading...</p>)
    }
}

export default Homepage;