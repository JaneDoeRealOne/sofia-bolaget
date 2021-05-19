import React from 'react';
import Home from './pages/Home/index';
import Services from './pages/Services/index';
import Contact from './pages/Contact/index';
import About from './pages/About/index';
import RutAvdrag from './pages/RutAvdrag/index';
import Hemstädning from './pages/Services/HomeCleaning/index';
import Storstädning from './pages/Services/BigCleaning/index';
import Kontorsstädning from './pages/Services/OfficeCleaning/index';
import Fönsterputs from  './pages/Services/WindowsCleaning/index';
import Trappstädning from  './pages/Services/StairsCleaning/index';

import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/rut' component={RutAvdrag} />
        <Route path='/home-cleaning' component={Hemstädning} />
        <Route path='/big-cleaning' component={Storstädning} />
        <Route path='/office-cleaning' component={Kontorsstädning} />
        <Route path='/windows-cleaning' component={Fönsterputs} />
        <Route path='/stairs-cleaning' component={Trappstädning} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
