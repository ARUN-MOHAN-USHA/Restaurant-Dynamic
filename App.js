import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Contact from "./Contact";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails";
import Restaurant from "./components/Restaurant";

function App() {
  return (      

    <Router>

       <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>

      <Footer/> 

    </Router>     
   
  );
}

export default App;
