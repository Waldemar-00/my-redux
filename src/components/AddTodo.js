import { useDispatch } from 'react-redux'
import { add_todo } from '../store/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
const AddTodo = () => {
  const dispatch = useDispatch()
  const addTodo = () => {
    const id = nanoid()
    dispatch(add_todo({ id, entity: document.querySelector('#todo').value }))
  }
  return (
    <div className="block-texarea">
      <div className="textarea">
        <label htmlFor="todo">++Add</label>
        <textarea name="todo" id="todo" cols="30" rows="3"></textarea>
        <button onClick={addTodo}>++Add</button>
      </div>
    </div>
  )
}
export default AddTodo