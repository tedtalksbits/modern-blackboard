import './App.css';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>

      <div className="app">
        <div id="modal">
        </div>

        <Header />
        <Switch>
          <Route path="/modern-blackboard" component={Home} exact />
          <Route path="/modern-blackboard/moreinfo/:id :name" component={MoreInfo} />
          <Route path="/modern-blackboard/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
