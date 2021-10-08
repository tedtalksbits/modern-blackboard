import './App.css';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <Router>

      <div className="app">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/moreinfo/:id :name" component={MoreInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
