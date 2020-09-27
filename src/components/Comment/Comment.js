import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';

const useStyles = makeStyles(() =>

    createStyles({
        root: {
            width: '5000%',
            maxWidth: '300ch',

        },
        inline: {
            display: 'inline',
        },
    }),
);

const Comment = (props) => {
    // const [img, setImg] = useState([]);
    const { name, email, body, id } = props.comment;
    // useEffect(() =>{
    //     fetch(`https://randomuser.me/api/${id}`)
    //     .then(res => res.json())
    //     .then(data => setImg(data))

    // }, [id])

    // const {gender, title, seed} = image;

    const classes = useStyles();
    return (
        <div>
            {/* {
                img.map(img => <Avaters img={img}></Avaters>)
            } */}

            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={`https://loremflickr.com/320/245/${id}`} />
                    </ListItemAvatar>
                    <ListItemText

                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    <small>{email}</small>
                                    <p>{body}</p>


                                </Typography>
                            <FavoriteBorderIcon/>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
            </List>
        </div>



    );
};

export default Comment;