import React from 'react';
import {useSelector} from "react-redux";
import {selectValue} from "../redux/app";

export default function CounterText() {
    // const count = useSelector((state) => state.counter.value)
    const count = useSelector(selectValue)
return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}
