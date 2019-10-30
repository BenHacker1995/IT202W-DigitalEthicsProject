import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

class Safety extends Component{
    render() {
        return (
            <div className='content'>
                <Header history={this.props.history}/>
                <h2>Capture New Opportunities Through Aggressive Investment</h2>
                <h2>Address Increased Rate of Change With More Nimble Education Systems</h2>
                <h2>Enhance Social Safety Nets to Smooth Automation Impacts</h2>
            </div>
        )
    }
}

export default Safety;