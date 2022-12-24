import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  let {pathname} = useLocation();
  return (
    <div className="App">
    {pathname === "/"?<Landing/>:
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/create">
        <h1>Create</h1>
      </Route>
      <Route exact path="/dog/:id">
        <h1>Dog detail</h1>
      </Route>
      <Route path="*">
        <h1>Error</h1>
      </Route>
    </Switch>}
    </div>
  );
}

export default App;
