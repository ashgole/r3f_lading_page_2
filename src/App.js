import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Temp from './component/temp/Temp';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/temp" element={<Temp />}/>
    </Routes>
  );
}

export default App;
