import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage'
import TrainSelect from '../../pages/TrainSelect/TrainSelect';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="trainselect" element={<TrainSelect/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
