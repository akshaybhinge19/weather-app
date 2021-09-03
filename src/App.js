
import './App.css';
import CurrentStatus from './components/CurrentStatus';
import CityStatus from './components/CityStatus'
 

function App() {
  return (
    <div className="App">
     <CityStatus/>
     <CurrentStatus/>
    </div>
  );
}

export default App;
