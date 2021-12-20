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
      <Route path="/topHeadline" component={TopHeadline}/>
      <Route path="/sports" component={Sports}/>
      <Route path="/about" component={About}/>
      <Route path="/business" component={Business}/>
      <Route path="/technology" component={Technology}/>
      <Route path="/entertainment" component={Entertainment}/>
    </Router>
    </>
  );
}

export default App;