import PlayerVsPlayer from './components/PlayerVsPlayer';
import logo from '../src/images/Minnesota Twins BA.png';
function App() {
  return (
    <div className="App">
      <div className="flex bt">
        <h1 className="title">TwinsStats</h1>
        <img height="8%" width="8%" src={logo} alt="Twins Logo" className="logo" />
      </div>
      <div className="flex content">
        <div className="sidebar">
        The Minnesota Twins are an American professional baseball team based in Minneapolis, Minnesota. The Twins compete in Major League Baseball as a member club of the American League Central division. The team is named after the Twin Cities area comprising Minneapolis and St. Paul. The 2017 Minnesota Twins season was the 57th season for the franchise in the Twin Cities of Minnesota, their 8th season at Target Field, and their 117th overall in the American League. The Twins began the season on April 3rd at home against the Kansas City Royals and finished the year on October 1st at home against the Detroit Tigers.
        </div>
        <PlayerVsPlayer />
      </div>
    </div>
  );
}

export default App;
