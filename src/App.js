import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
      }
    />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
