import React, {Component} from 'react';

import Header from '../Header/Header';

class Economic extends Component{
    render() {
        return(
            <div>
                <Header history={this.props.history}/>
            </div>
        )
    }
}

export default Economic;