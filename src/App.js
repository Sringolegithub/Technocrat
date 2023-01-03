

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';

function App() {
  return (
    <>
      <Header />
      
      <Switch>
        <Route path="/about" exact component={About}></Route>

        
      </Switch>

    </>
  );
}

export default App;
