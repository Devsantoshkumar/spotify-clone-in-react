import './App.css';
import { artists } from './data/artists.js';

function App() {
  return (
    <div className="App">
      <h1 className="btn btn-primary">Hello Spotify</h1>
      <img src={artists[0].image} alt='arijit singh' />
    </div>
  );
}

export default App;
