import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'inline-block',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class NavBarSection1 extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    this.setState({ open: false });
  };

  home = event => {
    this.props.home();
  };

  overview = event => {
    this.props.overview();
  };

  economic = event => {
    this.props.economic();
  };

  safety = event => {
    this.props.safety();
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
          <Button
            onClick={this.home}
          >
            Home
          </Button>
          <Button
            onClick={this.overview}
          >
            Overview
          </Button>
          <Button
            onClick={this.economic}
          >
            Economic Outlooks
          </Button>
          <Button
            onClick={this.safety}
          >
            Safety
          </Button>
        </div>
    );
  }
}

NavBarSection1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarSection1);