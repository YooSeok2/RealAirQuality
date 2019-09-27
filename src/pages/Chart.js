import React, {Component} from 'react';
import Bar from './Bar';
import '../pages/App.css';
import moment from 'moment';
import {Animated} from 'react-animated-css';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

  //전역변수 선언
let custom_data;
let string_data1;

let json_data;
let changeChart=[];
let cutomInterval;
let co2Interval;

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
         
          chartVisible : true,
          visible : true
      };


      //fetch --------------------------------------------------------------------------
      fetch('http://192.168.0.31/aqi.json')
        .then(res=>res.json())
        .then(json=>custom_data = json.map((entry)=>{
          entry.time=moment(entry.time, "DD.MM.YYYY HH:mm:ss").format("HH시");
          entry = {
            '미세먼지' : entry.pm10,
            '초미세먼지' : entry.pm25,
            'time' : entry.time
          };
          return entry;
        }))
        .then(json=>custom_data=json);
       
        

        fetch('http://192.168.0.31/voc-co2.json')
        .then(res=>res.text())
        .then(res=>string_data1=res); 
  
        
        //-------------------------------------------------------------------

    };



    //life cycle -------------------------------------------------------------
    componentDidMount(){
      //실시간 fetch ---------------------------------------------------------------
      setInterval(()=>{
        fetch('http://192.168.0.31/aqi.json')
        .then(res=>res.json())
        .then(json=>custom_data = json.map((entry)=>{
          entry.time=moment(entry.time, "DD.MM.YYYY HH:mm:ss").format("HH시");
          entry = {
            '미세먼지' : entry.pm10,
            '초미세먼지' : entry.pm25,
            'time' : entry.time
          };
          return entry;
        }))
        .then(json=>custom_data=json);

        fetch('http://192.168.0.31/voc-co2.json')
        .then(res=>res.text())
        .then(res=>string_data1=res); 
        }, 300000);
      //-----------------------------------------------------------------------------
      if(this.state.visible){
        cutomInterval = setInterval(()=>{
          this.setState({visible:!this.state.visible});
        },15000);
      }
      
      
    };
    

    componentDidUpdate(){
      if(this.state.visible){
        changeChart=[custom_data, '#FF5879', '#FFC64C', '미세먼지', '초미세먼지'];
      }
      if(!this.state.visible){
        changeChart=[json_data, '#08C7D8', '#975EFF', '이산화탄소', 'TVOC'];
      }
             
    }
    componentWillUnmount(){
      clearInterval(cutomInterval);
      clearInterval(co2Interval);
      
    };
    
    //-------------------------------------------------------------------------

    //stringdata 파싱함수 ----------------- -----------------------
    co2DataDimention(){
      
        if(string_data1){
          
          let split_data1 = string_data1.split('\n');
          
          split_data1.pop();
          
          json_data=split_data1.map((entry)=>{
            let custom_entry=JSON.parse(entry);
            return custom_entry;
          });
        }
  
        if(json_data){
          json_data=json_data.map((entry)=>{
            entry.time=moment(entry.time).format('HH시');
            entry={
              '이산화탄소' : entry.co2,
              'TVOC' : entry.voc,
              'time' : entry.time
            };
            return entry;
          });
        }
      }
      //-----------------------------------------------------------------
    render(){
        this.co2DataDimention();
        return(
                <div>
                    <Bar/>
                    <div className='chart'>
                        <div className="leftchart">
                            <div className='timebar'>
                                <p>시간별 수치</p> 
                            </div>
                            <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} 
                                    animationOutDuration={1000} isVisible={this.state.chartVisible}>
                                <LineChart
                                    width={910}
                                    height={457}
                                    data={changeChart[0]}
                                    margin={{
                                    top: 20, right: 20, left: -10, bottom: 0,
                                    }}>
                                    <CartesianGrid strokeDasharray="4 4" />
                                    <XAxis dataKey="time"/>
                                    <YAxis />
                                    <Tooltip />
                                    
                                    <Line type="monotone" dot={false} dataKey={changeChart[3]} stroke={changeChart[1]} strokeWidth={3}/>
                                    <Line type="monotone" dot={false} dataKey={changeChart[4]} stroke={changeChart[2]} strokeWidth={3}/>
                                </LineChart>
                            </Animated> 
                        </div>
                    </div>
                </div>
        );
    }
}

export default Chart;