import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { PrimaryButton } from '../../../components';

const useStyles = makeStyles(theme => ({
    container: {
        height: '80vh',
        width: '100vw',
        backgroundColor: theme.palette.secondaryColorLight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white'
    },
    subTitle: {
        marginTop: '3vh',
        color: 'white',
        marginBottom: '8vh'
    }
}));

const Content = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Typography variant="h1" className={classes.title}>Become a Software Developer</Typography>
            <Typography variant="h4" className={classes.subTitle}>All you need for starting your new career in one place</Typography>
            <PrimaryButton title="Start Discovering"/>
        </Box>
    )
};

export default Content;
