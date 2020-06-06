import React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '27vw',
        marginRight: '3vw',
        marginBottom: '3vh',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
        },
    },
    img: {
        height: '25vh'
    },
    title: {
        marginTop: '2vh',
        marginBottom: '2vh'
    },
    subTitle: {
        paddingBottom: '2vh'
    }
}));

const Topic = (props) => {
    const classes = useStyles();
    const { id, title, description, image, handleClicked } = props;

    return (
        <Card className={classes.container}>
            <Box onClick={() => handleClicked(id)}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.img} 
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>{title}</Typography>
                        <Typography variant="h6" className={classes.subTitle}>{description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Box>
        </Card>
    )
};

export default Topic;