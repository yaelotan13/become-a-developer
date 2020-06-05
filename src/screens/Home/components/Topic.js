import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '27vw',
        marginRight: '3vw',
        marginBottom: '3vh',
        cursor: 'pointer'
    },
    img: {
        height: '25vh'
    },
    title: {
        marginBottom: '2vh'
    },
    subTitle: {
        paddingBottom: '2vh'
    }
}));

const Topic = (props) => {
    const classes = useStyles();
    const { title, description, image } = props;

    return (
        <Card className={classes.container}>
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
        </Card>
    )
};

export default Topic;