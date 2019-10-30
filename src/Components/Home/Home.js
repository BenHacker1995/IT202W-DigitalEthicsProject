import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

class Home extends Component{
    render() {
        return (
            <div className='content'>
                <Header history={this.props.history}/>
            </div>
        )
    }
}

export default Home;