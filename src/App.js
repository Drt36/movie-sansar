import './App.css';
import {Route,Switch} from 'react-router-dom'
import { Home } from './components/Home/Home';
import WatchList from './components/WatchList/WatchList'
import GenreList from './components/MovieList/GenreList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PrivacyAndTerms from './components/Footer/PrivacyAndTerms';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/movies/:genre' render={(props) => <GenreList{...props}/>}></Route>
      <Route exact path='/moviedetail/:movieId' render={(props) => <MovieDetail{...props}/>}></Route>
      <Route exact path='/watchlist/all' component={WatchList}></Route>
      <Route exact path='/privacy' component={PrivacyAndTerms}></Route>
      <Route exact path='/terms' component={PrivacyAndTerms}></Route>
    </Switch>
  );
}

export default App;
