import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import QRScanner from './pages/QRScanner';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/scan" component={QRScanner} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
