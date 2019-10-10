import React, {Component} from 'react';
import smallDust from '../images/smalldust.png';
import smallFine from '../images/smallfine.png';
import smallCo2 from '../images/smallco2.png';
import smallTVOC from '../images/smalltvoc.png';

class LatelyPollution extends Component{
    render(){
        return(
            <div className='highpolludiv'>
                <form className='highpolludivbar'>
                    <p>최근 오염 횟수 </p>
                </form>
                {
                !this.props.changeView ?
                <form className='highpolludivtime'>
                    <span>
                        <div>
                            <img src={smallDust} alt=''/>
                            <p>미세먼지</p>
                        </div>
                        <p>4</p>
                    </span>
                    <div className='highpolluLine'/>
                    <span>
                        <div>
                            <img src={smallFine} alt=''/>
                            <p style={{marginLeft:10}}>초미세먼지</p>
                        </div>
                        <p style={{marginLeft:20}}>10</p>
                    </span>  
                </form>
                :
                <form className='highpolludivtime'>
                    <span>
                        <div>
                            <img src={smallCo2} alt=''/>
                            <p>미세먼지</p>
                        </div>
                        <p>4</p>
                    </span>
                    <div className='highpolluLine'/>
                    <span>
                        <div>
                            <img src={smallTVOC} alt=''/>
                            <p style={{marginLeft:10}}>초미세먼지</p>
                        </div>
                        <p style={{marginLeft:20}}>10</p>
                    </span>  
                </form>
                }
            </div>
        );
    }
}

export default LatelyPollution;