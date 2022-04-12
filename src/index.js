import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App /> {/*группирует функции из state.js updateNewPostText и addPost*/}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
// rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);

