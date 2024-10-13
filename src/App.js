import logo from './logo.svg';
import './App.css';
import Topbanner from './topbanner.js'
import Navbar from './navbar.js'
import Stats from './Stats.js'
import Quiz from './Quiz.js'
import Home from './Home.js'
import Jersy from './stats/jersyno.js'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
         <Topbanner />
         <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats.js" element={<Stats />} />
          <Route path="/quiz.js" element={<Quiz />} />
          <Route path="/stats/jersyno.js" element={ <Jersy />} />
         </Routes>
    </div>
  );
}

export default App;
