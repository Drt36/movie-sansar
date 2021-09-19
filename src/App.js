import './App.css';
import {Route,Switch} from 'react-router-dom'
import { Home } from './components/Home/Home';
import GenreList from './components/MovieList/GenreList';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/:genre' render={(props) => <GenreList{...props}/>}></Route>
    </Switch>
  );
}

export default App;
