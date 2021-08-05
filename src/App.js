import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './composents/pages/Home';
import Gallery from './composents/pages/Gallery';
import Header from './composents/templates/Header';
import Footer from './composents/templates/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/Gallery" component={Gallery} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
