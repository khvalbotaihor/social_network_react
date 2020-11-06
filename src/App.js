import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTubyb9WhTgpvPRNhyJziWioWCHhAXMgY7zSg&usqp=CAU"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
