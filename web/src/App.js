import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { routesConfig as Routes } from "./pages/routesConfig";

function App() {
  
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
