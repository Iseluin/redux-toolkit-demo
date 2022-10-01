import React from 'react';
import { increment, decrement } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';


function Counter() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{counter.value}</h3>
            <button onClick = {()=>dispatch(increment())}>INCREMENT</button>
            <button onClick = {()=>dispatch(decrement())}>DECREMENT</button>
        </div>
    );
}

export default Counter;

