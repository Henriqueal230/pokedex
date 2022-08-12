import './App.css';
import Pokemons from './components/pokemons';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Search />
      <Pokemons />
    </div>
  );
}

export default App;
