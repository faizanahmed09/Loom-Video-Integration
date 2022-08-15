import React from 'react';
import {useDispatch} from "react-redux";
import {decrement} from "../redux/app";

export default function DecrementButton() {
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
