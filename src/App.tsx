import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Venda from "./routes/Home/Venda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/vendas" element={<Venda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
