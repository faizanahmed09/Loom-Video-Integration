import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CounterText  from '../components/counterText'
import IncrementButton  from '../components/incrementButton'
import DecrementButton  from '../components/decrementButton'

export function Counter() {
    const count = useSelector((state) => state.counter.value)

    return (
        <div>
            <DecrementButton />
            <h1> <CounterText/> </h1>
            <IncrementButton />
        </div>
    )
}
