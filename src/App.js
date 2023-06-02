import './App.css';
import { NavBar, Hero, Stats, Product, Price, Ventajas, CallToAction, Footer } from './components'

function App() {
  return (
    <div className="App bg-white">
      <NavBar />
      <Hero />
      <Stats />
      <Product />
      <Price />
      <Ventajas />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
