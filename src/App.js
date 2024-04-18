import Carousel from "./components/carousel/carousel";
import Features from "./components/features/features";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />
    </div>
  );
}

export default App;
