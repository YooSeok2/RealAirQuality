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
    constructor(props){
        super(props);
        this.state={
            classifycation : ['매우나쁨', '나쁨', '보통', '좋음']
        }
    }
   // life cycle -----------------------------------------------

    //dust value measure-----------------------------------
    classifycationDust=()=>{
        let dust = this.props.dust;
        let value;
        if(151<dust){
            value = this.state.classifycation[0]
        }else if(81<dust){
            value = this.state.classifycation[1]
        }else if(31<dust){
            value = this.state.classifycation[2]
        }else{
            value = this.state.classifycation[3]
        };
       return value;
    }

    //fine value measure-----------------------------------
    classifycationFine=()=>{
        let dust = this.props.fine;
        let value;
        if(76<dust){
            value = this.state.classifycation[0]
        }else if(36<dust){
            value = this.state.classifycation[1]
        }else if(16<dust){
            value = this.state.classifycation[2]
        }else{
            value = this.state.classifycation[3]
        };
       return value;
    }
    //co2 value measure-----------------------------------
    classifycationCo2=()=>{
        let dust = this.props.co2;
        let value;
        if(1801<dust){
            value = this.state.classifycation[0]
        }else if(1201<dust){
            value = this.state.classifycation[1]
        }else if(501<dust){
            value = this.state.classifycation[2]
        }else{
            value = this.state.classifycation[3]
        };
       return value;
    }
    //tvoc value measure-----------------------------------
    classifycationTvoc=()=>{
        let dust = this.props.tvoc;
        let value;
        if(0.51<dust){
            value = this.state.classifycation[0]
        }else if(0.16<dust){
            value = this.state.classifycation[1]
        }else if(0.08<dust){
            value = this.state.classifycation[2]
        }else{
            value = this.state.classifycation[3]
        };
       return value;
    }
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
                    <p className="sidecondition">{this.classifycationDust()}</p>
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
                    <p className="sidecondition">{this.classifycationFine()}</p>
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
                    <p className="sidecondition">{this.classifycationCo2()}</p>
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
                    <p className="sidecondition">{this.classifycationTvoc()}</p>
                    <p className="sidemeasure">2343ppm</p>
                </form>
                </Animated>
            </div>
        );
    }
}

export default Side;