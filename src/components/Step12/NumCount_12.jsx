import { Button } from '@mui/material';
import React, { useState } from 'react';

function NumCount_12(props) {
    const [count, setCount] =  useState(3);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h2>Count: {count}</h2>
            <Button variant="outlined" onClick={increment} >+</Button>
            <Button variant="outlined" onClick={decrement}>-</Button>
        </div>
    );
}

export default NumCount_12;