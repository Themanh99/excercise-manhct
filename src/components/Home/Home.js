import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <>
            <h1 className='header'>List Component</h1>
            <div className='list-component'>

                <ul>
                    <li>
                        <Link to='/search' className='list-li'>Search components</Link>
                    </li>
                    <li>
                        <Link to='/counter' className='list-li'>Counter components</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;