import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import {PropTypes} from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Flashcard from '../Card/Flashcard';


const styles = theme => ({
    card: {
        margin: 20,
        minHeight: 435,
    },
    header: {
        minHeight: 80,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });

class Safety extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: false,
        }
    }

    state = {
        expanded: false,
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div className='content'>
                <div>
                    <Header history={this.props.history}/>
                </div>
                <Flashcard
                    title = {'Capture New Opportunities Through Aggressive Investment'}
                    content = {'Several nations have created competitive strategies to promote research and development investments as automation technologies become more mature.'}
                />
                <Flashcard
                    title = {'Notable Growth Strategies'}
                    content = {'Germany’s Industry 4.0 plan targets a 50 percent increase in manufacturing productivity via digital initiatives, while halving the resources required. China’s Made in China 2025 national strategy sets ambitious targets and provides subsidies for domestic innovation and production.'}
                />
                <Flashcard
                    title={'Address Increased Rate of Change With More Nimble Education Systems'}
                    content={'There are those who trust that to overcome artificial super intelligence, developing methods can be used to improve human intelligence and make a superhuman with super intelligence. Although in theory, creating a superhuman with super intelligence is likely thinkable over intelligence intensification of human brain or intelligence increase the truth is evolution of human brain and human intelligence is a very composite attempt with too many unknowns, dependencies and variables.'}
                />
                <Flashcard
                    title={'Enhance Social Safety Nets to Smooth Automation Impacts'}
                    content={'We humans are living an illogicality as the attainments of artificial intelligence advances are influencing human ecosystems with more unsafe and more appreciated chances than ever before. Whether potential or peril prevails will define and determine the future of humanity. This article is not to make timeline guesses to a singularity but slightly to start the conversation on the troubling route of artificial intelligence evolution for the upcoming of humanity. Whether we trust that singularity is near or not, the very supposed increases crucial security and risk enquiries for the coming of humanity, making us to think extremely about what we want as a species'}
                />
            </div>
                // <Card className={classes.card} display='inline'>
                //     <CardContent>
                //         <Typography>
                //             <h3>Capture New Opportunities Through Aggressive Investment</h3>
                //         </Typography>
                //     </CardContent>
                // <CardContent>
                // <Typography component="p">
                //     </Typography>
                //     <hr/>
                // </CardContent>
                // <IconButton
                //     onClick={this.handleExpandClick}
                //     aria-label="show more"
                //     >
                //     <ExpandMoreIcon />
                // </IconButton>
                // <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                //     <CardContent>
                //     <Typography paragraph variant="body2">
                //     <h3>Several nations have created competitive strategies to promote 
                //     research and development investments as automation technologies become more mature.</h3>
                //     </Typography>
                //     </CardContent>
                // </Collapse>
                // </Card>
                // <Card className={classes.card} display='inline'>
                //     <CardContent>
                //         <Typography>
                //             <h3>Notable Growth Strategies</h3>
                //         </Typography>
                //     </CardContent>
                // <CardContent>
                // <Typography component="p">
                //     </Typography>
                //     <hr/>
                // </CardContent>
                // <IconButton
                //     onClick={this.handleExpandClick}
                //     aria-label="show more"
                //     >
                //     <ExpandMoreIcon />
                // </IconButton>
                // <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                //     <CardContent>
                //     <Typography paragraph variant="body2">
                //     <h3>Germany’s Industry 4.0 plan targets a 50 percent increase in manufacturing productivity via digital initiatives, while halving the resources required. China’s Made in China 2025 national strategy sets ambitious targets and provides subsidies for domestic innovation and production</h3>
                //     </Typography>
                //     </CardContent>
                // </Collapse>
                // </Card>
                // <Card className={classes.card} display='inline'>
                //     <CardContent>
                //         <Typography>
                //             <h3>Address Increased Rate of Change With More Nimble Education Systems</h3>
                //         </Typography>
                //     </CardContent>
                // <CardContent>
                // <Typography component="p">
                //     </Typography>
                //     <hr/>
                // </CardContent>
                // <IconButton
                //     onClick={this.handleExpandClick}
                //     aria-label="show more"
                //     >
                //     <ExpandMoreIcon />
                // </IconButton>
                // <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                //     <CardContent>
                //     <Typography paragraph variant="body2">
                //     <h3>Enhance Social Safety Nets to Smooth Automation Impacts</h3>
                //     </Typography>
                //     </CardContent>
                // </Collapse>
                // </Card>
            // </div>
        )
    }
}

Safety.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Safety);