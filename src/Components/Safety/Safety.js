import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import {PropTypes} from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                <Header history={this.props.history}/>
                <div className='content'>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Capture New Opportunities Through Aggressive Investment</h3>
                        </Typography>
                    </CardContent>
                <CardContent>
                <Typography component="p">
                    </Typography>
                    <hr/>
                </CardContent>
                <IconButton
                    onClick={this.handleExpandClick}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph variant="body2">
                    <h3>Several nations have created competitive strategies to promote 
                    research and development investments as automation technologies become more mature.</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Notable Growth Strategies</h3>
                        </Typography>
                    </CardContent>
                <CardContent>
                <Typography component="p">
                    </Typography>
                    <hr/>
                </CardContent>
                <IconButton
                    onClick={this.handleExpandClick}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph variant="body2">
                    <h3>Germany’s Industry 4.0 plan targets a 50 percent increase in manufacturing productivity via digital initiatives, while halving the resources required. China’s Made in China 2025 national strategy sets ambitious targets and provides subsidies for domestic innovation and production</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Address Increased Rate of Change With More Nimble Education Systems</h3>
                        </Typography>
                    </CardContent>
                <CardContent>
                <Typography component="p">
                    </Typography>
                    <hr/>
                </CardContent>
                <IconButton
                    onClick={this.handleExpandClick}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph variant="body2">
                    <h3>Enhance Social Safety Nets to Smooth Automation Impacts</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                </div>
            </div>
        )
    }
}

Safety.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Safety);