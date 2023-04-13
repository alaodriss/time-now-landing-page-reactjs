import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./globalStyle";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pricing" exact element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;