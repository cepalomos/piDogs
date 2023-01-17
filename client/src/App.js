import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';
import DogDetail from './components/DogDetail';
import Form from './components/Form';

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
        <Form></Form>
      </Route>
      <Route exact path="/dog/:id">
        <DogDetail/>
      </Route>
      <Route path="*">
        <h1>Error</h1>
      </Route>
    </Switch>}
    </div>
  );
}

export default App;
