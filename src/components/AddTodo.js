import { useSelector, useDispatch } from 'react-redux'
const AddTodo = () => {
  const toDoArray = useSelector(state => state.todo.toDoArray)
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: [ ...toDoArray, document.querySelector('#todo').value ]})
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