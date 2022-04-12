import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Buttons from "./Buttons/Buttons";
import AddingInput from "./AddingInput/AddingInput";
import Counter from "./Counter/Counter";
import DeleteButton from "./DeleteButton/DeleteButton";

const TodosList = (props) => {
    return (
        <div>
            <span style={{width: '100%', display: 'flex'}}>
                <Counter selectedPostsCounter={props.selectedPostsCounter}/>
                <DeleteButton deletePosts={props.deletePosts}/>
            </span>

            <MyPosts onTextPostChange={props.onTextPostChange} deactivateEditMode={props.deactivateEditMode} activateEditMode={props.activateEditMode} posts={props.posts} unfollow={props.unfollow} follow={props.follow} message={props.message}/>

            <AddingInput updateNewPostText={props.updateNewPostText} addPost={props.addPost} newPostText={props.newPostText}/>

            <Buttons selectPosts={props.selectPosts} unSelectPosts={props.unSelectPosts} sortPosts={props.sortPosts}/>
        </div>
    );
};

export default TodosList;