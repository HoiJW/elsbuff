import './App.css';
import {Routes,Route,} from 'react-router-dom';

// Componetns
import Homepage from './Components/HomePage';
import Classes from "./Components/Classes";
import List from "./Components/List";
import BuffTier from './Components/BuffTier';
import Nav from './Components/Nav';
const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element= {  <Homepage /> }/>
        <Route path="/classes" element= {  <Classes /> }/>
        <Route path="/bufflist" element= {  <List /> }/>
        <Route path="/tierlist" element= {  <BuffTier /> }/>
      </Routes>
      <Nav />
    </div>
  )
}

export default App;
