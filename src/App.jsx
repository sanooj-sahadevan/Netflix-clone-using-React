/* eslint-disable no-unused-vars */
import Navbar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner.jsx";
import Card from "./Components/RowPost/RowPost.jsx";
import {
  action,
  Orginals,
  RomanceMovies,
  Horror,
  Comedy,
  Documentaries,
} from "./Urls";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Card url={Orginals} title="Netflix Orginals" />
      <Card url={action} title="Action" isSmall />
      <Card url={RomanceMovies} title="Romance" isSmall />
      <Card url={Horror} title="Horror"isSmall />
      <Card url={Comedy} title="Comedy" isSmall />
      <Card url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
