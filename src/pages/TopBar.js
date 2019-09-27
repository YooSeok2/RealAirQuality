import React, {Component} from 'react';
import './App.css';
import Cedar from '../images/Cedar.png'
import Clock from 'react-live-clock';

class TopBar extends Component{
    render(){
        return(
            <div className="topbar">
                <img src={Cedar} className="cedarimg" alt=""/>
                <p>사무실 내 실시간 공기질 측정 모니터링</p>
                <span className="clock"><Clock format={'YYYY년 MM월 DD일  HH:mm'} ticking={true}/></span>
            </div>
        );
    }
}


export default TopBar;