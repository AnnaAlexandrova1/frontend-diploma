import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage'
import Layout from '../../pages/Layout/Layout';
import TrainSelect from '../../pages/TrainSelect/TrainSelect';
import SeatsSelect from '../../pages/SeatsSelect/SeatsSelect';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="trainselect" element={<Layout children={<TrainSelect />} />}></Route>
        <Route path="seatsselect" element={<Layout children={<SeatsSelect />} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
