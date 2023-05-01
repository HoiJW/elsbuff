import './App.css';
import {Routes,Route,} from 'react-router-dom';

// Componetns
import Homepage from './Components/HomePage';
import Classes from "./Components/Classes";
import List from "./Components/List";
const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element= {  <Homepage /> }/>
        <Route path="/classes" element= {  <Classes /> }/>
        <Route path="/bufflist" element= {  <List /> }/>
      </Routes>
    </div>
  )
}

export default App;
