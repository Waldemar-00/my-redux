import Li from './Li'
import AddTodo from './AddTodo'
import { useSelector } from 'react-redux'
const Ul = () => {
  const entities = useSelector(state => state.todo.entities)
  return (
    <section className="ul">
      <AddTodo/>
      <ol className="ol-list">
        {
          Object.values(entities).map(entity => { 
            return < Li key={entity.id} id={entity.id} text={entity.entity} />
          })
        }
      </ol>
    </section>
  )
}
export default Ul