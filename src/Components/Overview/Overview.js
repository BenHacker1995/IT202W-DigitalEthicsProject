import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

class Overview extends Component{
    render() {
        return (
            <div className='content'>
                <Header history={this.props.history}/>
                <h2>What is the Technolocal Singularity?</h2>
                <h2>When is this Supposed to Happen?</h2>
                <h2>Other Paths to the Technological Singularity</h2>
            </div>
        )
    }
}

export default Overview;