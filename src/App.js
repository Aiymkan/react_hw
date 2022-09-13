import logo from "./logo.svg";
import "./App.css";
function AboutUs() {
  return (
    <div className="name">
      <h1>Save Your Tears</h1>
      <h2>Song by The Weeknd</h2>
      <p>Take me back 'cause I wanna stay</p>
      <p> Save your tears for another day</p>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="first">
      <h6>Source: LyricFind</h6>
      <h6>
        Songwriters: Abel Tesfaye / Ahmad Balshe / Jason Matthew Quenneville /
        Martin Karl Sandberg / Oscar Thomas Holter
      </h6>
      <h6>
        Save Your Tears lyrics © Universal Music Publishing Group, Warner
        Chappell Music, Inc
      </h6>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Portfolio />
    </div>
  );
}

export default App;
