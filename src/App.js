import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'
import Sports from './components/sports'
import About from './components/about'
import Business from './components/business'
import Technology from './components/technology';
import Entertainment from './components/entertainment';
import TopHeadline from './components/topheadline';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="https://623ac5ee9d32a6048eb3c1b9--effervescent-sopapillas-06f69f.netlify.app//topHeadline" component={TopHeadline}/>
      <Route path="/sports" component={Sports}/>
      <Route path="/about" component={About}/>
      <Route path="https://623ac5ee9d32a6048eb3c1b9--effervescent-sopapillas-06f69f.netlify.app//business" component={Business}/>
      <Route path="/technology" component={Technology}/>
      <Route path="/entertainment" component={Entertainment}/>
    </Router>
    </>
  );
}

export default App;