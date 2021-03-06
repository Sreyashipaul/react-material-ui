import React,{useState,useEffect} from  'react';
import MaterialUi from '../MaterialUi/MaterialUi';
import Axios from 'axios';
import Post from '../Post/Post';



function Home() {
    
    let [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    Axios("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setAllPosts(data.data))
      .catch((error) => console.log(error));
  }, []);
    return (
        <div>
        <MaterialUi> </MaterialUi>
        {allPosts.map((singlePost) => (
        <Post singlePost={singlePost} key={singlePost.id}></Post>
      ))}
        </div>
    );
}

export default Home;