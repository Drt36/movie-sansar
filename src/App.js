import './App.css';
import {Route,Switch} from 'react-router-dom'
import { Home } from './components/Home/Home';
import GenreList from './components/MovieList/GenreList';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/:genre' render={(props) => <GenreList{...props}/>}></Route>
      <Route exact path='/moviedetail/:movieId' render={(props) => <MovieDetail{...props}/>}></Route>
    </Switch>
  );
}

export default App;
