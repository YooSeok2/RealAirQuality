import React, {Component} from 'react';
import Notice from './Notice';
import './App.css';
import comfortableImg from '../images/comfortable.png' 
import uncomfortableImg from '../images/uncomfortable.png';

class Date extends Component{
    constructor(props){
        super(props);
        this.state={
            condition:'',
            imagesrc: comfortableImg
        }
    }

    componentDidUpdate(prev){
        if(this.props.co2 !== prev.co2)
        this.changeImageCondition();
    }

    changeImageCondition=()=>{
        if(this.props.dust>80){
            this.setState({condition:' 미세먼지'});
            this.setState({imagesrc: uncomfortableImg});
        }else if(this.props.fine>35){
            this.setState({condition:'초미세먼지'});
            this.setState({imagesrc:uncomfortableImg});
        }else if(this.props.co2>1200){
            this.setState({condition:'이산화탄소'});
            this.setState({imagesrc:uncomfortableImg});
        }else if(this.props.tvoc>0.15){
            this.setState({condition:'  TVOC'});
            this.setState({imagesrc:uncomfortableImg});
        }else{
            this.setState({condition:''});
            this.setState({imagesrc:comfortableImg})
        }
    }

    render(){
        return(
            <div className='datediv'>
                <h3>환기 시기</h3>
                <img src={this.state.imagesrc} alt=''></img>
                <label><p>사유: </p></label>
                <Notice />
            </div>
        );

    }
}

export default Date;