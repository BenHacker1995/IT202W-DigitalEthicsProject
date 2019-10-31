import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
// import CardContainer from '../CardContainer/CardContainer';
import Card from '../Card/Card';

class Safety extends Component{
    render() {
        return (
            <div className='content'>
                <Header history={this.props.history}/>
                {/* <CardContainer word={() => 'Capture New Opportunities Through Aggressive Investment'}
                desc={() => 'Several nations have created competitive strategies to promote research and development investments as automation technologies become more mature.'}
                /> */}
                <Card/>
                {/* <h2>Capture New Opportunities Through Aggressive Investment</h2>
                <h4>Several nations have created competitive strategies to promote 
                    research and development investments as automation technologies become more mature. </h4> */}
                <h3>Notable Growth Strategies</h3>
                <h4>Germany’s Industry 4.0 plan targets a 50 percent increase in manufacturing productivity via digital initiatives, while halving the resources required. China’s Made in China 2025 national strategy sets ambitious targets and provides subsidies for domestic innovation and production</h4>
                
                <h2>Address Increased Rate of Change With More Nimble Education Systems</h2>
                <h2>Enhance Social Safety Nets to Smooth Automation Impacts</h2>
            </div>
        )
    }
}

export default Safety;