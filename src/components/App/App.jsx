import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <h1>🎬 🎥 Hooray for Hollywood 🎞 🍿</h1>
        </header>
        <Router>        
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/Details">
          {/* Details page */}
            <Details />
          </Route>
          {/* Add Movie page */}
        </Router>
      </div>
   </ThemeProvider>
  );
}


export default App;
