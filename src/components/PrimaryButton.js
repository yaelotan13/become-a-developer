import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    button: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        height: '7vh',
        width: '25vw',
        color: 'white',
        border: '1px solid white',
        boxShadow: 'none',
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
        }
    }
}));

const PrimaryButton = (props) => {
    const classes = useStyle();
    const { title } = props;

    return (
        <Button className={classes.button} variant="contained">
            {title}
        </Button>
    )
};

export default PrimaryButton;