import React from 'react';
import cl from './Buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const Buttons = (props) => {
    const sortPostsClick = () => props.sortPosts()
    const unSelectPostsClick = () => props.unSelectPosts()
    const selectPostsClick = () => props.selectPosts()

    return (
        <div className={cl.buttonsSection}>
            <FontAwesomeIcon onClick={sortPostsClick} className="sortIcon" icon={faAlignJustify}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={unSelectPostsClick} className="closeIcon" icon={faTimes}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={selectPostsClick} className="checkIcon" icon={faCheck}></FontAwesomeIcon>
        </div>
    );
};

export default Buttons;
