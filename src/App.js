import './App.css';
import { Cardpokemon } from './components/card-pokemon/cardpokemon';
import { Header } from './components/header/header';

function Home(){
  return (
    <div>
      <Header />
      <Cardpokemon />
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
