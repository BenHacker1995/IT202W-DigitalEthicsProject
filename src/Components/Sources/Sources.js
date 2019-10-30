import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

class Sources extends Component{
    render() {
        return (
            <div>
                <Header history={this.props.history}/>
            </div>
        )
    }
}

export default Sources;