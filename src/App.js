
<<<<<<< HEAD

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
=======
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
>>>>>>> 7d927940ffd050d0516548a40263150b38699d00
import About from './component/About';
import Home from './component/Home';
import Expertise from './component/Expertise';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ThoughtCenter from './component/Thought-Center';

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      
      <Switch>
        <Route path="/about" exact component={About}></Route>
        <Route path="/expertise" exact component={Expertise}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/thought-Center" exact component={ThoughtCenter}></Route>

        
      </Switch>

    </>
  );
}

export default App;
