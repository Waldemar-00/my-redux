import Li from './Li'
import AddTodo from './AddTodo'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
const Ul = () => {
  const toDoArray = useSelector(state => state.todo.toDoArray)
  return (
    <section className="ul">
      <AddTodo/>
      <ol className="ol-list">
        {
          toDoArray.map(text => {
            const mark = nanoid() 
            return < Li key={mark} id={mark} text={text} />
          })
        }
      </ol>
    </section>
  )
}
export default Ul