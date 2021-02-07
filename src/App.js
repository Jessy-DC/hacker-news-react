import './App.css';
import {NewsList} from './components/NewsList'
import {Header} from "./components/Header";
import {BrowserRouter as NavLink, Link, Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import {Welcome} from "./components/Welcome";

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <div className="App">
            <Header />
        </div>
        <Switch>
           <Route exact path='/' component={NewsList} />
           <Route path='/welcome' component={Welcome} />
        </Switch>
      </Router>
  );
}

export default App;
