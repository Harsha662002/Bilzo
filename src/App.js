import Carousel from "./components/carousel/carousel";
import Customers from "./components/customers/customers";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Integrations from "./components/integrations/integrations";
import Navbar from "./components/navbar/navbar";
import Trial from "./components/trial/trial";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Carousel />
      <Features />
      <Integrations />
      <Customers />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
