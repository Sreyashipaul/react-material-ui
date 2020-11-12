import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card ,Typography, CardActionArea, CardContent, CardActions} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,

  },
  
});

const Post = ({singlePost}) => {
    let { userId, id, title, body } = singlePost;
  let history = useHistory();
  let handleCommentButton = (postID) => {
    history.push(`/post/${postID}`);
  };
   
  let classes = useStyles();
  
    return (
        <Card   className={classes.root} 
         style ={ { margin:"auto auto 30px",
                    marginTop:"10px",
                   
                    padding:" 10px"}}
         >
          <CardActionArea  > 
         <CardContent  >
         <Typography color="primary" variant="h4">
         {title}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         <pre>{body}</pre>
             </Typography>
         </CardContent>
          </CardActionArea>
     
      
      <CardActions> 
      <ThumbUpIcon
        color="primary"
        style={{ marginRight: "10px" }}
      ></ThumbUpIcon>
     
      <FavoriteIcon
      color = "secondary"
      style={{ marginRight: "30px" }}
      
      >
      </FavoriteIcon>

      <Button
        onClick={() => handleCommentButton(id)}
        variant="contained" color="primary"
      >
        See More
      </Button>
      </CardActions>
      
      </Card>
    );
};


export default Post;