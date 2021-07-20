import './App.css';
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects'
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
