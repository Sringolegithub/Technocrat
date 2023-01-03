


// import { Route, Switch } from 'react-router-dom';
// import Header from './component/Header';

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <>

      
      {/* <Switch>
        <Route path="/about" exact component={About}></Route>

        
      </Switch> */}


    <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />    
          
    </Switch>

    </>
  );
}

export default App;
