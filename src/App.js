import logo from './logo.svg';
import './App.css';
import InfoStrip from './Components/InfoStrip';
import Navbar from './Components/Navbar';
import Mid from './Components/Mid';
import PhoneSlider from './Components/PhoneSlider';
import Seca from './Components/Seca';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <InfoStrip/>
      <Mid/>
      <PhoneSlider/>
      <Seca/>
    </div>
  );
}

export default App;
