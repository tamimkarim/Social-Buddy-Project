import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import Comment from '../Comment/Comment';
import CommentIcon from '@material-ui/icons/Comment';
import SendRoundedIcon from '@material-ui/icons/SendRounded';import TextField from '@material-ui/core/TextField';
// import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        maxWidth: 5000,
    },
    media: {
        height: 340,

    },
});

const UserDetail = () => {
    const { userId } = useParams();
    const classes = useStyles();
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [userId]);


    return (
        <div>
            <NavBar></NavBar>

            <Card className={classes.root}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h3> {user.title}</h3>
                            {/* <h5>Id : {user.id} </h5> */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h5>{user.body}</h5>
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                     {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> <small>{userId} likes</small>
                    </IconButton> */}
                    <Button size="large" color="primary">
                    <FavoriteIcon /> <small>{userId} Love</small>
                       
                    </Button>
                    <Button size="large" color="primary">
                    '<CommentIcon/>' 5 Comments
                       
                    </Button>
                    {/* <Button size="small" color="primary">
                        Learn More
                    </Button> */}
                    
                   

                </CardActions>
                <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                        
                        <TextField id="standard-basic" label="Type your comment" >  
                        </TextField>
                        <Button size="small" variant="contained"   color="primary">
                        <SendRoundedIcon/>
                        </Button>
                        
                    </form>
                    
                    {
                        comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                    <Link to="/" style={{ textDecoration: 'none', marginLeft: '1.5rem', color: 'white' }}>
                    <Button size="large" color="primary">
                       visit homepage <HomeIcon/>
                    </Button>
                    </Link>
                </CardContent>

            </Card>

        </div>
    );
};

export default UserDetail;