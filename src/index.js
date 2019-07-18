import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Drink Coffee', 'Build Awesome App'];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const writeText = 'Write here to search';
    const searchStyle = {
        fontSize: '18px'
    };

    return <input
        placeholder={writeText}
        style={searchStyle} />;
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);