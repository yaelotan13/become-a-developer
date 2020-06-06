import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Element } from 'react-scroll';
import { withRouter } from 'react-router-dom';

import Topic from './Topic';

import developer from '../../../assets/images/developer.jpg';
import gamer from '../../../assets/images/gamer.jpg';
import coder from '../../../assets/images/coder.jpg';
import interview from '../../../assets/images/interview.jpg';
import learning from '../../../assets/images/learning.jpg';
import progress from '../../../assets/images/progress.jpg';
import question from '../../../assets/images/question.jpg';

const images = [
    developer, question, progress, learning, coder, interview, gamer
];

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
        },
    },
    title: {
        marginTop: '5vh',
        marginBottom: '5vh',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10vw',
        },
    },
    topicsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    }
}));

const Topics = (props) => {
    const classes = useStyles();
    const { topics, history } = props;
    
    const handleTopicClicked = (id) => {
        history.push(`/catalog?topic=${id}`)
    };

    return (
        <Element name="topics" className="element" >
            <Box className={classes.container}>
                <Typography variant="h4" className={classes.title}>Topics:</Typography>
                <Box className={classes.topicsContainer}>
                    {topics.map((topic, index) => 
                        <Topic 
                            key={topic.id} 
                            id={topic.id}
                            title={topic.title} 
                            description={topic.description} 
                            image={images[index]}
                            handleClicked={handleTopicClicked} 
                        />
                    )}
                </Box>
            </Box>
        </Element>
    )
};

export default withRouter(Topics);
