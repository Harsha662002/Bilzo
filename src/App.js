import Carousel from "./components/carousel/carousel";
import Customers from "./components/customers/customers";
import Features from "./components/features/features";
import Hero from "./components/hero/hero";
import Integrations from "./components/integrations/integrations";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />
      <Integrations />
      <Customers />
    </div>
  );
}

export default App;
