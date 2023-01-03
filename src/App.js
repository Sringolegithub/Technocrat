import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';

function App() {
  return (
    <>
      <Header />
      
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>

        
      </Switch>

    </>
  );
}

export default App;
