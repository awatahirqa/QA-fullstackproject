import './Resources/App.css';
import Nav from './Components/Header/Nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Components/Header/Home'
import About from './Components/Header/About';

function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route path = "/" exact>
      <Home/>

    </Route>
    <Route path = "/about">
      <About/>

    </Route>
    </Switch>
    </Router>
  );
}

export default App;
