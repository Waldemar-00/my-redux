import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const incrementCounter = () => {
    dispatch({ type: 'COUNTER_INCREMENT' })
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>++</button>
    </>
  )
}
export default Counter