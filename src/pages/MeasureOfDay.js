import React,{Component} from 'react';
import './App.css';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class MeasureOfDay extends Component{
    render(){
        return(
            <div className='measurediv'>
                <form className='measurebar'>
                        <p>요일별 수치</p>
                </form>
                <form className='barchart'>
                    <BarChart
                        width={340}
                        height={190}
                        data=''
                        margin={{
                            top:20, left:40
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                       
                        <Tooltip />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </form>
            </div>
        );
    }
}

export default MeasureOfDay;