import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foods from './pages/Foods';
// import NewUpdate from './pages/NewUpdate';

export default function FoodsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Foods/>} />
      </Routes>
    </BrowserRouter>
  );
}