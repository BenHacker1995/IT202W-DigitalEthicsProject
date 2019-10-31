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

class Overview extends Component{
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
                            <h3>Overview</h3>
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
                    <h3></h3>
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
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Development in Machine Learning Algorithms and Neuromorphic Chips</h3>
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
                    <h3>Current information revolution, as the machine learning systems improve quickly, the power and promise of software that learn by example, patterns and models seems immense. Along with the imposing advances in software development, there also now seems to be a parallel evolution in computer hardware to recover machine intelligence capabilities. This is clearly noticeable in the growth of ongoing efforts towards developing systems on a chip, focused on restructuring more efficient, lower energy overriding microprocessor chips that imitator the human brain circuitry. As these rapidly evolving neuromorphic chips are being planned to process human physical data such as images, smell and sound and to answer to changes in that data in ways not exactly programmed, a lot is expected to change for machine intelligence and artificial intelligence evolution.</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>Charging up with Super Intelligence</h3>
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
                    <h3>There are those who trust that to overcome artificial super intelligence, developing methods can be used to improve human intelligence and make a superhuman with super intelligence. Although in theory, creating a superhuman with super intelligence is likely thinkable over intelligence intensification of human brain or intelligence increase the truth is evolution of human brain and human intelligence is a very composite attempt with too many unknowns, dependencies and variables.</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                <Card className={classes.card} display='inline'>
                    <CardContent>
                        <Typography>
                            <h3>What Next?</h3>
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
                    <h3>We humans are living an illogicality as the attainments of artificial intelligence advances are influencing human ecosystems with more unsafe and more appreciated chances than ever before. Whether potential or peril prevails will define and determine the future of humanity. This article is not to make timeline guesses to a singularity but slightly to start the conversation on the troubling route of artificial intelligence evolution for the upcoming of humanity. Whether we trust that singularity is near or not, the very supposed increases crucial security and risk enquiries for the coming of humanity, making us to think extremely about what we want as a species</h3>
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </div>
        )
    }
}

Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);