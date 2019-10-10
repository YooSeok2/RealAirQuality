import React, {Component} from 'react';
import TopBar from './TopBar';
import Date from './Date';
import Chart from './Chart';
import Side from './Side';
import './App.css';

class App extends Component{
    render(){
        return(
        <section className="section">
            <TopBar/>
            <div className="maindiv">
                <div className="leftdiv">
                    <Side />
                    <Chart/>
                </div>
                <Date/>
                
            </div>
        </section>
        );
    }
}

export default App;