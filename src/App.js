import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalMenu from './components/PrincipalMenu';
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
