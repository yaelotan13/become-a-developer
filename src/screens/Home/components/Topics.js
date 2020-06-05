import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Topic from './Topic';

import developer from '../../../assets/images/developer.jpg';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh',
        paddingLeft: '6vw',
        paddingRight: '6vw'
    },
    title: {
        marginTop: '5vh',
        marginBottom: '5vh'
    },
    topicsContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}));

const Topics = (props) => {
    const classes = useStyles();
    const { topics } = props;

    return (
        <Box className={classes.container}>
            <Typography variant="h4" className={classes.title}>Topics:</Typography>
            <Box className={classes.topicsContainer}>
                {topics.map(topic => 
                    <Topic key={topic.id} title={topic.title} description={topic.description} image={developer} />
                )}
            </Box>
        </Box>
    )
};

export default Topics;
