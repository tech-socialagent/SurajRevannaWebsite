import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Initiatives from "./components/Initiatives";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <News />
      <Gallery />
      <Initiatives />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
