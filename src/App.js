import './App.css';
import {NewsList} from './components/NewsList'
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <NewsList />
    </div>
  );
}

export default App;
