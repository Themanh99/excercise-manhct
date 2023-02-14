import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Counter.css';

function Counter() {
    const [number, setNumber] = useState(1);

    const handleDecrease = (e) => {
        setNumber(prev => prev - 1);
    }
    const handleIncrease = (e) => {
        setNumber(prev => prev + 1);
    }
    const handleReset = () => {
        setNumber(1);
    }
    return (
        <div className='app-counter'>
            <Link to='/' className='link'>Go to homepage</Link>
            <div className='label'>{number}</div>
            <div className='buttons'>
                <button onClick={handleDecrease}>Decrease</button>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
}

export default Counter;