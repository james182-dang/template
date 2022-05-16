import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Displays from './components/Displays';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [currentDisplay, setCurrentDisplay] = useState('Home');

  const showDisplay = () => {
    switch (currentDisplay) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Displays':
        return <Displays />;
      case 'Links':
        return <Links />;
      case 'Contact':
        return <Contact />;
    }
  };

  return (
    <div className="App">
      <Navbar
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <main>
        {showDisplay(currentDisplay)}
      </main>

      <Footer />
    </div>
  );
}

export default App;
