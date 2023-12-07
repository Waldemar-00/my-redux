import './App.css' 
import { Provider } from 'react-redux'
import store from './store/store'
import Counter from './components/Counter'
import Article from './components/Article'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Counter/>
        </header>
        <Article/>
      </div>
    </Provider>
  ) 
}

export default App 
