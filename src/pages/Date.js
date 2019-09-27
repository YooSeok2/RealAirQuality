import React, {Component} from 'react';
import Notice from './Notice';
import './App.css';

class Date extends Component{
    constructor(props){
        super(props);
        this.state={
            condition:'',
            imagesrc:'/images/comfortable.png'
        }
    }

    componentDidUpdate(prev){
        if(this.props.co2 !== prev.co2)
        this.changeImageCondition();
    }

    changeImageCondition=()=>{
        if(this.props.dust>80){
            this.setState({condition:' 미세먼지'});
            this.setState({imagesrc:'/images/uncomfortable.png'});
        }else if(this.props.fine>35){
            this.setState({condition:'초미세먼지'});
            this.setState({imagesrc:'/images/uncomfortable.png'});
        }else if(this.props.co2>1200){
            this.setState({condition:'이산화탄소'});
            this.setState({imagesrc:'/images/uncomfortable.png'});
        }else if(this.props.tvoc>0.15){
            this.setState({condition:'  TVOC'});
            this.setState({imagesrc:'/images/uncomfortable.png'});
        }else{
            this.setState({condition:''});
            this.setState({imagesrc:'/images/comfortable.png'})
        }
    }

    render(){
        return(
            <div className='datediv'>
                <h3>환기 시기</h3>
                <img src={this.state.imagesrc} alt=''></img>
                <label><p>사유: {this.state.condition}</p></label>
                <Notice />
            </div>
        );

    }
}

export default Date;