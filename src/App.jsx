
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from './component/splash';
import Wedding from './component/Wedding';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />}/>
      <Route path="/wedding" element={<Wedding />}>
        </Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
