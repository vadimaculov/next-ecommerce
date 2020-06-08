import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

   const useStyles = makeStyles({
 orangeButton: {
     backgroundColor: 'orange',
     color: 'white',
 }, });

export default () => {
const localClasses = useStyles();

    return (
        <div>
        <h1>About us</h1>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
            Primary
        </Button>
        <Button variant="contained" color="secondary">
            Secondary
        </Button>
        <Button variant="contained" disabled>
            Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
            Link
        </Button>
        <Button 
        className={localClasses.orangeButton}
        variant="contained" 
        fullWidth>
            Orange
        </Button>
        </div>
    );
};
