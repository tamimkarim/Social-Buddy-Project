import React from 'react';
import './Users.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';


//from material ui
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 645,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Users = (props) => {
    const { title, body, id } = props.user;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="users">
            {/* Material UI */}
            <Card className={classes.root}>
                <CardHeader
                    
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title= {<h5>{title}</h5>}
                    
                />
                
                <CardMedia
                    className={classes.media}
                    image={`https://loremflickr.com/320/245${id}`}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                        { <p><small>September 27, 2020</small></p> }
                    </Typography>
                    <br/>
                    <NavLink style={{ textDecoration: 'none' }} to={`/user/${id}`}>
                        <Button variant="contained" color="primary">
                        See details
                    </Button></NavLink>
                </CardContent>


                <CardActions disableSpacing>
                    <Link to="*" style={{ textDecoration: 'none', marginLeft: '1.5rem', color: 'white' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> <small>{id}</small>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    </Link>

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Overhead information is digital information transferred across the functional interface between a user and a telecommunications system.

          </Typography>
                        <Typography paragraph>

                            Overhead information originated by the user is not considered to be system overhead information. 
          </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default Users;