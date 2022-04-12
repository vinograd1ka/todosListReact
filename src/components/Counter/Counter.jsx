import React from 'react';
import cl from "./Counter.module.css";

const Counter = (props) => {
    return (
        <div className={cl.counterSection}>
            <h2>Selected : {props.selectedPostsCounter}</h2>
        </div>
    );
};

export default Counter;