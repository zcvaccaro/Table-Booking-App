import './App.css';
import BannerLogo from './BannerLogo.jpg';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header logo={BannerLogo} />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
