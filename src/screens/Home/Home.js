import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import { useSelector } from '../../hooks';
import { topicsSlector } from '../../store/selectors/topics';
import { fetchTopics } from '../../store/topics/actions';
import { Content, Topics } from './components';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh',
    }
}));

const Home = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const topicsState = useSelector(topicsSlector);

    useEffect(() => {
      dispatch(fetchTopics());
    }, [dispatch]);

    return (
        <Box className={classes.container}>
            <Content />
            <Topics topics={topicsState.topics} />
        </Box>
    )
};

export default Home;
