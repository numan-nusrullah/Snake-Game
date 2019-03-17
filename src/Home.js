import React from 'react';
import './button.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
     <div className='container'>
    <div id='Button'>
      <Button id='button' variant="contained" color="secondary" className={classes.button}>
      <Link id='link' to='/game'> Start Game </Link> 
      </Button>
    </div>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);

