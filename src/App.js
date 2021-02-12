import './App.css';
import {NewsList} from './components/NewsList'
import {Header} from "./components/Header";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import {Welcome} from "./components/Welcome";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/GlobalStyle";

const history = createBrowserHistory();

const darkMode = {
    body: '#1a1d29',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
}

function App() {
  return (
      <ThemeProvider theme={darkMode}>
          <GlobalStyles />
          <Router history={history}>
              <div className="App">
                  <Header />
                  <Switch>
                      <Route exact path='/' component={NewsList} />
                      <Route path='/welcome' component={Welcome} />
                  </Switch>
              </div>
          </Router>
      </ThemeProvider>
  );
}

export default App;
