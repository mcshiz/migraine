import React from 'react'
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class Chart extends React.Component {

    render() {
        let data = this.props.data;
        let upperPressure = Math.max.apply(Math,data.map(function(o){return o.pressure;}));
        let lowerPressure = Math.min.apply(Math,data.map(function(o){return o.pressure;}));
        //scale the pressure so it fits on same x-axis
        for(let i = 0; i < data.length; i++) {
            if(lowerPressure === upperPressure) {
                data[i]['pressure'] = 10 * ((data[i]['pressure'] - 1000) / (1050 - 1000))
            } else {
                data[i]['pressure'] = 10 * ((data[i]['pressure'] - lowerPressure) / (upperPressure - lowerPressure))
            }
        }
        return (
            <ComposedChart width={window.innerWidth} height={window.innerHeight} data={data}
                           margin={{top: 10, right: 10, bottom: 10, left: 10}}>
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke='#f5f5f5'/>
                {/*<Area type='monotone' dataKey='pressure' fill='#8884d8' stroke='#8884d8'/>*/}
                <Bar dataKey='sleep' barSize={10} fill='#413ea0'/>
                <Bar dataKey='work' barSize={10} fill='#ce0202'/>
                <Line type='monotone' dataKey='pain' stroke='#ff7300'/>
                <Line type='monotone' dataKey='pressure' stroke='#8884d8'/>
            </ComposedChart>

        )
    }

}

export default Chart