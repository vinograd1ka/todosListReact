import React from 'react';
import cl from "./AddingInput.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddingInput = (props) => {
    const addPostClick = () => {
        if (props.newPostText.length === 0) return props.state
        props.addPost()
    }

    const onPostChange = (e) => {
        const currentValue = e.target.value;
        props.updateNewPostText(currentValue)
    }

    return (
        <div className={cl.searchSection}>
            <form action="#">
                <label>
                    <input onChange={onPostChange} value={props.newPostText} type="search"/>
                </label>

                <button onClick={addPostClick} type="submit"> <FontAwesomeIcon className="iconPlus" icon={faPlus}></FontAwesomeIcon> </button>
            </form>
        </div>
    );
};

export default AddingInput;