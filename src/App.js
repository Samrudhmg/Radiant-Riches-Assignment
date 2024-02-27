
import './App.css';
import Footer from './Footer';
import Deals from './components/Deals';
import Home from './components/Home';
import HomeComp from './components/Home-comp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App ">
      <Navbar/>
        <Home/> 
       <HomeComp/> 
      <Deals/>
      <Footer/> 
    </div>
  );
}

export default App;
