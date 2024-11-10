import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalMenu from './Pages/PrincipalMenu';
import HistoricalResults from './Pages/HistoricalResults'
import SingleDay from './Pages/SingleDay'
import SingleState from './Pages/SingleState'
import SingleDateAndState from './Pages/SingleStateAndDate'
import ErrorPage from './Pages/ErrorPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">      
        <Header />
        <h1>Main Content</h1>
        <Switch>
          <Route path="/"> <PrincipalMenu /> </Route>
        </Switch>
        <Switch>
          <Route path="/historical-results"> <HistoricalResults /> </Route>
        </Switch>
        <Switch>
          <Route path="/single-day"> <SingleDay /> </Route>
        </Switch>
        <Switch>
          <Route path="/single-state"> <SingleState /> </Route>
        </Switch>
        <Switch>
          <Route path="/single-state-day"> <SingleDateAndState /> </Route>
        </Switch>
        <Switch>
          <Route path="*"> <ErrorPage /> </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
