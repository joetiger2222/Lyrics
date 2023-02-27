import logo from "./logo.svg";
import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Discover from "./Discover";
import SideBar from "./SideBar";
import SongPage from "./SongPage";
import TopCharts from './TopCharts';
import TopArtists from './TopArtists';
import TopPlay from './TopPlay';
import Header from "./Header";
function App() {
  return (
    <div className="flex md:flex-row flex-col">
      <SideBar/>
      <Header/>
     <Routes>
     <Route path="/" element={<Discover />} />
     <Route path="/SongPage/:songId" element={<SongPage />} />
     </Routes>
     <div className="xl:sticky relative top-0 h-fit flex flex-col items-center">
      <TopPlay/>
     </div>
    </div>
  );
}

export default App;
