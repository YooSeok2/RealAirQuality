import React,{Component} from 'react';
import './App.css';

class MeasureOfDay extends Component{
    render(){
        return(
            <div className='measurediv'>
                <form className='measurebar'>
                        <p>요일별 수치</p>
                </form>
                <form className='barchart'>

                </form>
            </div>
        );
    }
}

export default MeasureOfDay;