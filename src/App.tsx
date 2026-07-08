import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import './index.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero
          name="郑江"
          title="人工智能技术开发人员"
          intro="专注于金融业务领域人工智能技术的应用落地"
        />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
