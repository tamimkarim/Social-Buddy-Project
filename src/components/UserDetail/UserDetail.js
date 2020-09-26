import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import Comment from '../Comment/Comment';

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

    }, []);


    return (
        <div>
            <NavBar></NavBar>
            
            <Card className={classes.root}>
                <CardActionArea>
                   
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           <h3> {user.title}</h3>
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h5>{user.body}</h5>
          </Typography>
          
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary">
                       Comments
                    </Button>
                    {/* <Button size="small" color="primary">
                        Learn More
                    </Button> */}
                   
                    
                </CardActions>
                <CardContent>
                    {
                        comments.map(comment => <Comment comment={comment}></Comment> )
                    }
                </CardContent>
                   
            </Card>
            
        </div>
    );
};

export default UserDetail;