import "./styles.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
