import React from 'react';
import cl from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const onPostChange = (e) => props.onTextPostChange(e.target.value, e.target.id)

    return (
        <div>
            {props.posts.map (p =>
                <div key={p.id} className={cl.container}>
                    {p.editMode
                        ? <span>
                            <input className={cl.activatedInput}
                                onBlur={() => { props.deactivateEditMode(p.id)} }
                                onChange={ onPostChange } autoFocus={true} id={p.id}
                                value={ p.message } type="text"
                            />

                            {p.selected
                                ? <button className={cl.circle} onClick={() => {props.unfollow(p.id)} }><FontAwesomeIcon className="selectedIcon" icon={faCheck}></FontAwesomeIcon></button>
                                : <button className={cl.circle} onClick={ () => { props.follow(p.id)} }> </button>
                            }
                        </span>

                        : <span>
                            <div onClick={() => { props.activateEditMode(p.id)} } className={cl.text}> { p.message.length === 0 ? p.message = '---' : p.message } </div>
                            {p.selected
                                ? <button className={cl.circle} onClick={() => { props.unfollow(p.id)} }><FontAwesomeIcon className="selectedIcon" icon={faCheck}></FontAwesomeIcon></button>
                                : <button className={cl.circle} onClick={ () => { props.follow(p.id)} }> </button>
                            }
                        </span>
                    }
                    <div className={cl.line}></div>
                </div>
            )}
        </div>
    );
};

export default Post;