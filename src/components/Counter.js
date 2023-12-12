import { useDispatch, useSelector } from 'react-redux'
import { counter_increment } from '../store/counterSlice'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const incrementCounter = () => {
    dispatch( counter_increment(2) )
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>++</button>
    </>
  )
}
export default Counter