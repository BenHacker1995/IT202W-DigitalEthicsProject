import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Flashcard from '../Card/Flashcard';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
// }));

// let RecipeReviewCard = () => {
// }

class Safety extends Component{
    // classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
  
    // handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
    
    render() {
        return (
            <div className='content'>
                <Header history={this.props.history}/>
                <Flashcard title={() => 'Capture New Opportunities Through Aggressive Investment'}
                desc={() => 'Several nations have created competitive strategies to promote research and development investments as automation technologies become more mature.'}/>
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