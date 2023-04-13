import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./globalStyle";
import Pricing from "./pages/Pricing";
import Header from "./components/Topbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pricing" exact element={<Pricing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;