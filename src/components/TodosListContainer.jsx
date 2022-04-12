import React from 'react';
import {
    addPost,
    deletePosts,
    follow,
    unfollow,
    updateNewPostText,
    selectPosts,
    unSelectPosts,
    sortPosts, activateEditMode, deactivateEditMode, onTextPostChange
} from "../redux/global-reducer";
import TodosList from "./TodosList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.todosListPage.newPostText,
        posts: state.todosListPage.posts,
        selectedPostsCounter: state.todosListPage.selectedPostsCounter
    }
}

const TodosListContainer = connect(mapStateToProps, {
    addPost, deletePosts, updateNewPostText,
    follow, unfollow, selectPosts,
    unSelectPosts, sortPosts, activateEditMode,
    deactivateEditMode, onTextPostChange
})(TodosList)

export default TodosListContainer;