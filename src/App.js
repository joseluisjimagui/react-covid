import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalMenu from './pages/PrincipalMenu';
import HistoricalResults from './pages/HistoricalResults'
import SingleDay from './pages/SingleDay'
import SingleState from './pages/SingleState'
import SingleDateAndState from './pages/SingleStateAndDate'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">      
        <Header />
        <h1>Main Content</h1>
        <Switch>
          <Route exact path="/"> <PrincipalMenu /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/historical-results"> <HistoricalResults /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/single-day"> <SingleDay /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/single-state"> <SingleState /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/single-state-day"> <SingleDateAndState /> </Route>
        </Switch>
        <Switch>
          <Route exact  path="*"> <ErrorPage /> </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
