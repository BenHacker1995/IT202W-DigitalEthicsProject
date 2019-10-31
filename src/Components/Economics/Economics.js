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

class Economics extends Component{
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
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Introduction</h3>
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
                    <h3>As humanity stands on the brink of a technology activated information revolution, the scale, choice and effort of the impact of intelligence evolution in machines is distinct anything humanity has qualified before. As a result, the speed at which the ideas, revolutions and discoveries are emerging on the back of artificial intelligence has no historical example and is essentially troublemaking everything in the human ecosystem. Artificial intelligence continues to develop at its present dizzying rate, the singularity can come about in the central of the current century.</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Information Evolution</h3>
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
                    <h3>The success of the quickly progressing information age is based on data, and data and information are all around us. When we assess the information and intelligence development in machines, we understand that it has inaccurate human life in important originations in how we make digital data and information, how we capture and gather the digital data, how we stock it, how we save and matching the information thereby clouding the limits of languages, time zones, politics, philosophy, race, religion and culture.</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </div>
        )
    }
}

Economics.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Economics);