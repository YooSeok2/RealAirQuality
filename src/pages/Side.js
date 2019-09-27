import React, {Component} from 'react';
import './App.css';
import {Animated} from 'react-animated-css';
import dustimg from '../images/dust.png';
import fineimg from '../images/fine.png';
import co2img from '../images/co2.png';
import tvocimg from '../images/bigtvoc.png';
import textdust from '../images/dusttext.png';
import textfine from '../images/textfine.png';
import textco2 from '../images/textco2.png';
import texttvoc from '../images/texttvoc.png';



class Side extends Component{
    render(){
        return(
            <div className='side'>
                <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} 
                        animationOutDuration={1000} isVisible={true}>
                <form>
                    <span>
                        <img alt='' src={dustimg} className='sideimg'/>
                        <img alt='' src={textdust} className='sidetextimg'/>
                    </span>  
                    <p className="sidecondition">좋음</p>
                    <p className="sidemeasure">67㎍/㎥</p>
                </form>
                </Animated>
                
                <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} 
                        animationOutDuration={1000} isVisible={true}>
                <form>
                    <span>
                        <img alt='' src={fineimg} className='sideimg'/>
                        <img alt='' src={textfine} className='sidetextimg'/>
                    </span> 
                    <p className="sidecondition">보통</p>
                    <p className="sidemeasure">67㎍/㎥</p>
                </form>
                </Animated>
                
                <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} 
                        animationOutDuration={1000} isVisible={true}>
                <form>
                    <span>
                        <img alt='' src={co2img} className='sideimg'/>
                        <img alt='' src={textco2} className='sidetextimg'/>
                    </span> 
                    <p className="sidecondition">나쁨</p>
                    <p className="sidemeasure">2343ppm</p>
                </form>
                </Animated>
                
                <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} 
                        animationOutDuration={1000} isVisible={true}>
                <form >
                    <span>
                        <img alt='' src={tvocimg} className='sideimg'/>
                        <img alt='' src={texttvoc} className='sidetextimg'/>
                    </span> 
                    <p className="sidecondition">매우나쁨</p>
                    <p className="sidemeasure">2343ppm</p>
                </form>
                </Animated>
            </div>
        );
    }
}

export default Side;