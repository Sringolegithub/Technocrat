
<<<<<<< HEAD

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
=======
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
>>>>>>> 7d927940ffd050d0516548a40263150b38699d00
import About from './component/About';

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      
      <Switch>
        <Route path="/about" exact component={About}></Route>

        
      </Switch>

=======
    <Header/>
    <Switch>
      <Route path="/about" exact component={About} />    
      <Route path="/" exact component={Home} />    
    </Switch>
>>>>>>> 7d927940ffd050d0516548a40263150b38699d00
    </>
  );
}

export default App;
