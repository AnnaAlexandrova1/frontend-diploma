import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage'
import Layout from '../../pages/Layout/Layout';
import TrainSelect from '../../pages/TrainSelect/TrainSelect';
import SeatsSelect from '../../pages/SeatsSelect/SeatsSelect';
import Passengers from '../../pages/Passengers/Passengers';
import FilterTrainSelect from '../Filters/FilterTrainSelect';
import OverLooked from '../OverLooked/OverLooked';
import TicketInfo from '../TicketInfo/TicketInfo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="trainselect" element={<Layout main={<TrainSelect />} sidebar={<FilterTrainSelect />} sidebarBottom={ <OverLooked />} />}></Route>
        <Route path="seatsselect" element={<Layout main={<SeatsSelect />} sidebar={<FilterTrainSelect />} sidebarBottom={ <OverLooked />}/>}></Route>
        <Route path="passengers" element={<Layout main={<Passengers />} sidebar={<TicketInfo />} sidebarBottom={null}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
