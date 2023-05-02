import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()    

    const [input, setInput] = useState('')

    const submit = (e) =>{
        dispatch(incrementByAmount(Number(input)))
        setInput('')
    }


    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(-5))}>-5</button>
            </div>
            <div>
                <input type='number' placeholder='Custom Amount' value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={submit}>Add Custom</button>
            </div>
        </div>
    )
}

export default Counter
