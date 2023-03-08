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
                        <Link to='/search' className='list-li'>Search</Link>
                    </li>
                    <li>
                        <Link to='/counter' className='list-li'>Counter</Link>
                    </li>
                    <li>
                        <Link to='/todofeature' className='list-li'>TodoFeature</Link>
                    </li>
                    <li>
                        <Link to='/songfeature' className='list-li'>Songfeature</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;