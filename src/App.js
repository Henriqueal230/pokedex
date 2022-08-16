import './App.css';
import Pokemons from './components/pokemons';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Search />
      <h5 id='carregando'>CARREGANDO ...</h5>
      <Pokemons />
    </div>
  );
}

export default App;
