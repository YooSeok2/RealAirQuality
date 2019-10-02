import React, {Component} from 'react';

class Bar extends Component{
    
    render(){
        return(
            <div>
            {!this.props.changeChart ?[
            <div className='bar'>
                <div className='ovalSpan'/>
                <p>미세먼지</p>
                <div className='ovalSpan2'/>
                <p>초미세먼지</p>
                <div className='pageOval' />
                <div className='pageOval2' /> 
            </div>
            ]:[
            <div className='bar'>
                <div className='ovalSpan' style={{backgroundColor:'#08C7D8'}} />
                <p>이산화탄소</p>
                <div className='ovalSpan2' style={{backgroundColor:'#975EFF'}} />
                <p>TVOC</p>
                <div className='pageOval' style={{backgroundColor:'#d8d8d8'}} />
                <div className='pageOval2' style={{backgroundColor:'#4a4a4a'}} />
            </div>
            ]}    
            </div>
        );
    }
}

export default Bar;