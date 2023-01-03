

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';
import Expertise from './component/Expertise';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ThoughtCenter from './component/Thought-Center';

function App() {
  return (
    <>

      <Header />
      
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/expertise" exact component={Expertise}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/thought-Center" exact component={ThoughtCenter}></Route>

        
      </Switch>

    <Footer/>
    </>
  );
}

export default App;
