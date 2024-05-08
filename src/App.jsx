/* eslint-disable no-unused-vars */
import Navbar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner.jsx';
import Card from './Components/RowPost/RowPost.jsx'
import './App.css'



function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner/>
      <Card/>
    </div>
  );
}

export default App;
