import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Headliner from "./components/headliner/Headliner";
import Filter from "./components/filter/Filter";
import Person from "./components/person/Person";
import News from "./components/news/News";
import Channels from "./components/channels/Channels";
import MainButton from "./components/main-button/MainButton";
import img1 from "./assets/images/image1.png";
import img2 from "./assets/images/image2.png";
import img3 from "./assets/images/image3.png";
import img4 from "./assets/images/image4.png";
import img5 from "./assets/images/image5.png";
import img6 from "./assets/images/image6.png";
import img7 from "./assets/images/news1.png";
import img8 from "./assets/images/news2.png";
import img9 from "./assets/images/news3.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import icon5 from "./assets/images/icon5.png";
import icon6 from "./assets/images/icon6.png";
import miniIcon1 from "./assets/images/miniIcon1.png";
import miniIcon2 from "./assets/images/miniIcon2.png";
import miniIcon3 from "./assets/images/miniIcon3.png";
import logo from "./assets/images/logo.svg";
import exit from "./assets/images/exit.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="headerFilter">
          <Filter miniIcon={miniIcon1} subTitle="San Francisco, California" />
        </div>
        <div className="headerFilter">
          <Filter miniIcon={miniIcon2} subTitle="Analysis" />
        </div>
        <div className="headerFilter">
          <Filter miniIcon={miniIcon3} subTitle="Monthly" />
        </div>
        <div className="headerWrap"></div>
        <Person />
      </header>
      <aside className="sidebar">
        <img className="logo" src={logo} alt="" />
        <Navigation />
        <button className="asideBtn">
          <img className="asideImg" src={exit} alt="" />
          <p className="asideText">Logout</p>
        </button>
      </aside>
      <main className="main">
        <section className="channels">
          <div className="titleWrapp">
            <h2 className="block-title">Explore Channels</h2>
            <MainButton />
          </div>
          <div className="channels-block">
            <Channels miniature={icon1} title="FOX NEWS" />
            <Channels miniature={icon2} title="CW6 NEWS" />
            <Channels miniature={icon3} title="ABC NEWS" />
            <Channels miniature={icon4} title="AL JAZEERA" />
            <Channels miniature={icon5} title="BBC NEWS" />
            <Channels miniature={icon6} title="CNN NEWS" />
          </div>
        </section>
        <section className="headliners">
          <div className="titleWrapp">
            <h2 className="block-title">Today’s Headlines</h2>
            <MainButton />
          </div>
          <div className="block-content">
            <Headliner
              title="Hate speech vs free speech"
              thumbnail={img1}
              label="BBC NEWS"
            />
            <Headliner
              title="Ontario Liberal leadership"
              thumbnail={img2}
              label="BBC NEWS"
            />
            <Headliner
              title="Victim of Scarborough"
              thumbnail={img3}
              label="BBC NEWS"
            />
            <Headliner
              title="Mother who left her baby"
              thumbnail={img4}
              label="ABC NEWS"
            />
            <Headliner
              title="Mother of Stefanie Rengel"
              thumbnail={img5}
              label="CW6 NEWS"
            />
            <Headliner
              title="World   Cup: Popular items"
              thumbnail={img6}
              label="CNN NEWS"
            />
          </div>
        </section>
        <section className="news">
          <div className="titleWrapp">
            <h2 className="news-title">Featured News</h2>
            <MainButton />
          </div>
          <div className="block-news">
            <News
              title="Travellers to pay more than $2K, Trudeau says"
              preview={img7}
              label="FOX NEWS"
            />
            <News
              title="Myanmar’s military seizes control of country ov  er..."
              preview={img8}
              label="CNN NEWS"
            />
            <News
              title="Pressure builds for Biden to cancel other pipeline..."
              preview={img9}
              label="BBC NEWS"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
