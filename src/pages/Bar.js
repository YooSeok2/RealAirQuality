import React, {Component} from 'react';

class Bar extends Component{
    render(){
        return(
            <div className='bar'>
                <div className='ovalSpan'/>
                <p>미세먼지</p>
                <div className='ovalSpan2'/>
                <p>초미세먼지</p>

                <div className='pageOval' />
                <div className='pageOval2' />
                
            </div>
        );
    }
}

export default Bar;