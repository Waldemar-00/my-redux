import Li from './Li'
import AddTodo from './AddTodo'
import { useSelector } from 'react-redux'
const Ul = () => {
  const toDoArray = useSelector(state => state.todo.toDoArray)
  return (
    <section className="ul">
      <AddTodo/>
      <ol className="ol-list">
        {
          toDoArray.map(text => {
            return < Li text={text} />
          })
        }
      </ol>
    </section>
  )
}
export default Ul