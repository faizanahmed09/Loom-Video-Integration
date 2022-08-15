import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../redux/app";

export default function IncrementButton() {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
        </div>
    )
}
