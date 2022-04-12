import React from 'react';
import cl from "./Delete.module.css";

const DeleteButton = (props) => {
    const deleteSelectedPostsClick = () => props.deletePosts()

    return (
        <div className={cl.deleteSection}>
            <button onClick={deleteSelectedPostsClick} className={cl.deleteBtn}> Delete </button>
        </div>
    );
};

export default DeleteButton;