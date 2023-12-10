import './App.css' 
import { Provider } from 'react-redux'
import store from './store/store'
import Counter from './components/Counter'
import Article from './components/Article'
import Ul from './components/Ol'
import useFetch from './custom/useFetch'
function App() {
  const { customFetch } = useFetch() 
  customFetch('https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json')
    .then(response => console.log(response))
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
        <Article />
        <Ul />
        <div>
          {/* {JSON.stringify(data)} */}
        </div>
    </div>
    </Provider>
  ) 
}

export default App 
