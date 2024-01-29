import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
