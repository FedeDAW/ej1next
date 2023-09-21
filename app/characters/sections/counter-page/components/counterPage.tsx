'use client'
import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const { count, incrementCount } = useCounter();

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
};

export default Counter;