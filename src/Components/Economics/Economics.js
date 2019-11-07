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
            <div>
                <Header history={this.props.history}/>
            </div>
            <Flashcard
                title = {'Overview of Economic Issues with the Singularity'}
                content = {'The success of the quickly progressing information age is based on data, and data and information are all around us. When we assess the information and intelligence development in machines, we understand that it has inaccurate human life in important originations in how we make digital data and information, how we capture and gather the digital data, how we stock it, how we save and matching the information thereby clouding the limits of languages, time zones, politics, philosophy, race, religion and culture.'}
            />
            <Flashcard
                title = {'The Fall of Capitalism?'}
                content = {'Current information revolution, as the machine learning systems improve quickly, the power and promise of software that learn by example, patterns and models seems immense. Along with the imposing advances in software development, there also now seems to be a parallel evolution in computer hardware to recover machine intelligence capabilities. This is clearly noticeable in the growth of ongoing efforts towards developing systems on a chip, focused on restructuring more efficient, lower energy overriding microprocessor chips that imitator the human brain circuitry. As these rapidly evolving neuromorphic chips are being planned to process human physical data such as images, smell and sound and to answer to changes in that data in ways not exactly programmed, a lot is expected to change for machine intelligence and artificial intelligence evolution.'}
            />
            <Flashcard
                title={'So What Happens When We Have No Money?'}
                content={'There are those who trust that to overcome artificial super intelligence, developing methods can be used to improve human intelligence and make a superhuman with super intelligence. Although in theory, creating a superhuman with super intelligence is likely thinkable over intelligence intensification of human brain or intelligence increase the truth is evolution of human brain and human intelligence is a very composite attempt with too many unknowns, dependencies and variables.'}
            />
        </div>
        )
    }
}

Economics.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Economics);