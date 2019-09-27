import React, {Component} from 'react';
import './App.css';


let noticeArray=[];
let noticeStore=[];
class Notice extends Component{
    classifyNoticeDust=()=>{ 
        let dustID=[];
        let fineID=[];
        let co2ID=[];
        let tvocID=[];
        if(noticeArray){
          for(let i=0;i<noticeArray.length;i++){
              let entry = noticeArray[i].id
                if(entry === 1){
                    dustID=1;
                }
                if(entry ===2){
                    fineID=2;
                }
                if(entry === 3){
                    co2ID=3;
                }
                if(entry ===4){
                    tvocID=4;
                }
          }
            
        
        }

        if(this.props.dust>80 && dustID.length<2){
            noticeArray.unshift({
            id: 1,
            notice:'미세먼지로 인한 환기 알림',
            time : this.props.dusttime,
            value : this.props.dust + '㎍/㎥'
        });
        }

        if(this.props.fine>35 && fineID.length<2){
            noticeArray.unshift(
                {
                id: 2,
                notice:'초미세먼지로 인한 환기 알림',
                time : this.props.dusttime,
                value : this.props.fine + '㎍/㎥'
                 });
        }
    
        if(this.props.co2>1200 && co2ID.length<2){
            noticeArray.unshift(
                {
                id: 3,
                notice:'co2로 인한 환기 알림',
                time : this.props.co2time,
                value : this.props.co2 + 'ppm'
                 });
        }
    
        if(this.props.tvoc>0.15 && tvocID.length<2){
            noticeArray.unshift(
                {
                id: 4,
                notice:'tvoc로 인한 환기 알림',
                time : this.props.co2time,
                value : this.props.tvoc + '㎍/㎥'
                 });
        }
       
        
    }


    render(){
        if(noticeArray){
            this.classifyNoticeDust();
            if(noticeArray.length>5){
                noticeStore=noticeArray
                console.log(noticeStore);
                for(let i=0; i<noticeArray.length; i++){
                    noticeArray.pop();
                }
            }
        } 
        
        return(
            <div>
                <h3>최근 환기 알림</h3>
                
                {noticeArray.map(content=>
                <form key={content.id}>
                <label className='' key={content.id+1}>
                    <p className='' key={content.id+2}>{content.notice}</p>
                    <p className='' key={content.id+3}>{content.time}</p>
                </label>
                <label className='' key={content.id+4}>
                    <p className='' key={content.id+5}>
                    {content.value}
                    </p>
                </label>
                </form> )
                }              
            </div>
        );

    }
}

export default Notice;