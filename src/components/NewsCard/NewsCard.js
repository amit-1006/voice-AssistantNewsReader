import React,{useState,useEffect,createRef} from 'react';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles.js';

const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i})=>{

    const classes=useStyles();
    const [refs,setRefs]=useState([]);

    const scrollToRef=((ref)=>{
        return window.scroll(0,ref.current.offsetTop-70);
    });

    useEffect(()=>{
        setRefs((refs)=>{
            return Array(20).fill().map((_,i)=>refs[i] || createRef())});
    },[])

    useEffect(()=>{

        if(i===activeArticle && refs[activeArticle]){
            return scrollToRef(refs[activeArticle]);
        }

    },[i,activeArticle,refs])


return (
    <Card ref={refs[i]} className={classNames(classes.card,activeArticle===i?classes.activeCard:null)}>
        <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'}/>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" href={url} target="_blank">Learn More</Button>
            <Typography variant="h5" color="textSecondary">{i+1}</Typography>
        </CardActions>
    </Card>
);
}

export default NewsCard;