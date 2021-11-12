import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/MainSection/Main';

function App() {
  return (
    <>
    <nav><Navbar /></nav>
    <section className="main">
      <Main />
    </section>
    {/* <Footer /> */}
    </>
  );
}

export default App;
