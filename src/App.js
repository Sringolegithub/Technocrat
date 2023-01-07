

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';
import Expertise from './component/Expertise';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ThoughtCenter from './component/Thought-Center';
// import ContactForm from './component/ContactForm';
import JoinUs from './component/JoinUs';
// import JoinUsForm from './component/JoinUsForm';


function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/expertise" exact component={Expertise}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        {/* <Route path="/contactform" exact component={ContactForm}></Route> */}
        <Route path="/thought-Center" exact component={ThoughtCenter}></Route>
        <Route path="/joinus" exact component={JoinUs}></Route>

      </Switch>
      <Footer/>
            
      {/* {
      localStorage.token ? <JoinUsForm/> :<JoinUs/>
      } */}

    </>
  );
}

export default App;
