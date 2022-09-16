import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ModelThree from './pages/ModelThree';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='model3' element={<ModelThree />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
