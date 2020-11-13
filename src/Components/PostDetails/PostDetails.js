import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { Box, Avatar, Typography } from "@material-ui/core";
import MaterialUi from '../MaterialUi/MaterialUi';


const PostDetails = () => {
    let { postID } = useParams();
  let [post, setPost] = useState([]);
  let [comments, setComments] = useState([]);
  useEffect(() => {
    Axios(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((data) =>
      setPost(data.data)
    );
  }, []);
  useEffect(() => {
    Axios(
      `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
    ).then((data) => setComments(data.data));
  }, []);



let {id, title, body} = post
    return (
        <div>
          <MaterialUi> </MaterialUi>
           
           <Box mx={35} p={4} boxShadow={4}>
            
        <Typography color="primary" variant="h4">
        <h2> {id}</h2>
       <h4>{title}  </h4>
         
        </Typography>
    
        <pre>{body}</pre>
        <h3> All Comments:</h3>
        <ul>
          {comments.map((singleComment) => (
            <Box display="flex" flexDirection="row" p={1} m={1}>
            <Box mr={2}>
            <Avatar
                alt="Profile Picture"
              />
            </Box>
            
              <Box
                style={{ background: "#f9f9f9", width: "100%" }}
                px={3}
                className="MuiPaper-rounded"
              >
                <Typography color="primary" variant="h6">
                  {singleComment.email}
                  
                </Typography>
                {singleComment.body}
              </Box>
          </Box> 
          ))}
        </ul>
      
      </Box>
   
        </div> 
    );
};

export default PostDetails;