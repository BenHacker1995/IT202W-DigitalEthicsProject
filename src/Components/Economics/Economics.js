import React, {Component} from 'react';

import Header from '../Header/Header';

class Economic extends Component{
    render() {
        return(
            <div>
                <Header history={this.props.history}/>
                <h2>Overview of Economic Issues with the Singularity</h2>
                <h2>The Fall of Capitalism?</h2>
                <h2>So What Happens When We Have No Money?</h2>
            </div>
        )
    }
}

export default Economic;