import './App.css' 
import Counter from './components/Counter'
import Article from './components/Article'
import Ul from './components/Ol'
import useFetch from './custom/useFetch'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.heroes.heroes)
  const { customFetch } = useFetch() 
  useEffect(() => {
    dispatch(() => customFetch(dispatch, 'HEROES_FETCH'))
  }, [customFetch, dispatch])
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
        <Article />
        <Ul />
      <ol className="ol-list">
          {data.map(dt => <li id={dt.id} key={dt.id}>{dt.name}</li>)}
        </ol>
    </div>
  ) 
}

export default App 
