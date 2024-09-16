import React from 'react';
import Post from './Post/Post'
import cl from "./MyPosts.module.css";

const MyPosts = (props) => {
    return (
        <div className={cl.myPosts}>
            <Post {...props}/>
        </div>
    );
};

export default MyPosts;

