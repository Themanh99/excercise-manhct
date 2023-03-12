import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment, reset } from '../../Redux/counterSlice';
import './Counter.css';

function Counter() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleDecrease = () => {
        const action = decrement();
        dispatch(action);
    }
    const handleIncrease = () => {
        const action = increment();
        dispatch(action);
    }
    const handleReset = () => {
        const action = reset();
        dispatch(action);
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