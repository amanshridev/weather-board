import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Heading from "./components/HeadingDate";
import Card from "./components/Card";
import { useState } from "react";

const api = {
  key: "357a338cf594d50b9520f1bf81d86a71",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  let date = new Date().toLocaleDateString();
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 px-2 pt-2 bottom-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <SideBar />
      </aside>
      <NavBar />
      <Heading data={date} />
      <Card />
    </>
  );
}

export default App;
