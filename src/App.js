import React from 'react';
import './App.css';
import TodosListContainer from "./components/TodosListContainer";

const App = () => {
    return (
        <div className="table">
            <h1>Todos</h1>
            <TodosListContainer />
        </div>
    );
};

export default App;