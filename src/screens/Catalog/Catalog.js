import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({ 

}));

const getTopicId = (searchString) => {
    const idIndex = searchString.indexOf('=') + 1;
    return searchString.slice(idIndex);
};

const Catalog = (props) => {
    const classes = useStyles();
    const topicId = getTopicId(props.location.search);

    return (
        <Box>
            CATALOG!
        </Box>
    );
};

export default withRouter(Catalog);
