import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {PropTypes} from 'prop-types';
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
class Flashcard extends Component {

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

    title = this.props.title;
    content = this.props.content;

  render() {
    const { classes } = this.props;
    return (
        <div className='flashcard'>
                <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    id='card-content'
                >
                </CardHeader>
                {this.title}
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
                    <Typography component="p">
                        </Typography>
                        <Typography component="p">
                            {this.content}
                        </Typography>
                    </CardContent>
                </Collapse>
                </Card>
        </div>
  );
}
}

Flashcard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Flashcard);