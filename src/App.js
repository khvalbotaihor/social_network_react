import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTubyb9WhTgpvPRNhyJziWioWCHhAXMgY7zSg&usqp=CAU" alt=""/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>
                Main content
            </div>
        </div>
    );
}

export default App;
