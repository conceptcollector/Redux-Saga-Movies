import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';

function App() {
  return (
    <div className="App">
    <h1>Let's All Go to the Movies</h1>
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route>
        {/* Details page */}
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
