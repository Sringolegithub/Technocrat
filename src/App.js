
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/about" exact component={About} />    
      <Route path="/" exact component={Home} />    
    </Switch>
    </>
  );
}

export default App;
