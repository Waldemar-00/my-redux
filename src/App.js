import './App.css' 
import Counter from './components/Counter'
import Article from './components/Article'
import Ul from './components/Ol'
// import useFetch from './custom/useFetch'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncThunkHeroesSlice } from './store/heroesSlice' //heroes_fetch
function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.heroes.heroes)
  // const { customFetch } = useFetch() 
  // useEffect(() => {
    // dispatch(() => customFetch(heroes_fetch, 'https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json'))
  // }, [customFetch, dispatch])
  useEffect(() => {
    dispatch(asyncThunkHeroesSlice())
  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
        <Article />
        <Ul />
      <ol className="ol-list">
        {
          typeof data === 'object' ?
            data.map(dt => <li id={dt.id} key={dt.id}>{dt.name}</li>) :
            <li>{data}</li>
        }
        </ol>
    </div>
  ) 
}

export default App 
