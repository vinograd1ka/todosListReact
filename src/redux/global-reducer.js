const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const DELETE_POSTS = 'DELETE_POSTS';
const SELECT_POSTS = 'SELECT_POSTS';
const UNSELECT_POSTS = 'UNSELECT_POSTS';
const SORT_POSTS = 'SORT_POSTS';
const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';
const ON_TEXT_POST_CHANGE = 'ON_TEXT_POST_CHANGE';

const initialState = {
    posts: [],
    newPostText: '',
    selectedPostsCounter: 0,
}
let lastPost = '';

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.posts[state.posts.length - 1] === undefined) lastPost = 0; else lastPost = state.posts[state.posts.length - 1].id

            return {
                ...state,
                posts: [...state.posts, {
                    selected: false,
                    message: state.newPostText,
                    id: lastPost + 1,
                }],
                newPostText: ''
            };

        case DELETE_POSTS:
            return {
                ...state,
                selectedPostsCounter: 0,
                posts: state.posts.filter(u => u.selected === false)
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.addingInputText
            };

        case FOLLOW:
            return {
                ...state,
                selectedPostsCounter: state.selectedPostsCounter + 1,

                posts: state.posts.map( u => {
                    if (u.id === action.postId) {
                        return {...u , selected: true}
                    }

                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                selectedPostsCounter: state.selectedPostsCounter - 1,
                posts: state.posts.map(u => {
                    if (u.id === action.postId) {
                        return {...u, selected: false}
                    }

                    return u;
                })
            };

        case SELECT_POSTS:
            return {
                ...state,
                selectedPostsCounter: state.posts.length,
                posts: state.posts.map( u =>  ({ ...u, selected: true }) )
            };

        case UNSELECT_POSTS:
            return {
                ...state,
                selectedPostsCounter: 0,
                posts: state.posts.map( u => ({ ...u, selected: false }) )
            };

        case SORT_POSTS:
            return {
                selectedPostsCounter: state.selectedPostsCounter,
                posts: state.posts.sort((a, b) => a.message > b.message ? 1 : -1)
            };

        case ACTIVATE_EDIT_MODE:
            return {
                ...state,

                posts: state.posts.map( u => {
                    if (u.id === action.postId) {
                        return {...u , editMode: true}
                    }

                    return u;
                })
            };

        case DEACTIVATE_EDIT_MODE:
            return {
                ...state,

                posts: state.posts.map( u => {
                    if (u.id === action.postId) {
                        return {...u , editMode: false}
                    }

                    return u;
                })
            };

        case ON_TEXT_POST_CHANGE:
            return {
                ...state,

                posts: state.posts.map( u => {
                    if (u.id == action.postId) {
                        return {...u , message: action.newActivatedPostText}
                    }

                    return u;
                })
            };

        default:
            return state;
    }
}
export const addPost = () => ({ type: ADD_POST })

export const deletePosts = () => ({ type: DELETE_POSTS })

export const updateNewPostText = (addingInputText) => ({ type: UPDATE_NEW_POST_TEXT, addingInputText })

export const follow = (postId) => ({ type: FOLLOW, postId })

export const unfollow = (postId) => ({ type: UNFOLLOW, postId})

export const selectPosts = (postId) => ({ type: SELECT_POSTS, postId})

export const unSelectPosts = (postId) => ({ type: UNSELECT_POSTS, postId})

export const sortPosts = (postId) => ({ type: SORT_POSTS, postId})

export const activateEditMode = (postId) => ({ type: ACTIVATE_EDIT_MODE, postId})

export const deactivateEditMode = (postId) => ({ type: DEACTIVATE_EDIT_MODE, postId})

export const onTextPostChange = (newActivatedPostText, postId) => ({ type: ON_TEXT_POST_CHANGE, newActivatedPostText, postId})

export default globalReducer;
