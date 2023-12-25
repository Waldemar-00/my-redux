import './App.css' 
import Counter from './components/Counter'
import Article from './components/Article'
import Ul from './components/Ol'
// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { asyncThunkFetch } from './custom/asyncThunkFethc' //heroes_fetch
import { useGetHeroesQuery, useDeleteHeroMutation } from './API/api_slice'
function App() {
  const { data, isSuccess } = useGetHeroesQuery()
  const [ onQueryStarted,{ isSuccess: deleteSuccess, Error} ] = useDeleteHeroMutation()
  console.log(data, isSuccess, Error )
  // const dispatch = useDispatch()
  // const data = useSelector(state => state.heroes.heroes)
  // useEffect(() => {
    // dispatch(asyncThunkFetch({ url: 'https://fake-api-dfaa6-default-rtdb.firebaseio.com/heroes.json' }))
  // }, [dispatch])
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
            data.map(dt => {
              const id = dt.id
              return <li id={id} key={id} onClick={() => onQueryStarted(id)}>{dt.name}</li>
            }) :
            <li>{deleteSuccess}</li>
        }
        </ol>
    </div>
  ) 
}

export default App 
