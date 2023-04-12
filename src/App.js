import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Topbar/Navbar";
import GlobalStyle from "./globalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;