/* eslint-disable no-unused-vars */
import Navbar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner.jsx";
import Card from "./Components/RowPost/RowPost.jsx";
import { action, Orginals } from "./Urls";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Card url={Orginals} title="Netflix Orginals" />
      <Card url={action} title="Action" isSmall />
    </div>
  );
}

export default App;
