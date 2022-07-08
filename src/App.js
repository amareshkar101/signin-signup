import SignInOutContainer from "./containers/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import './App.css';

function App() {
  return (
    <div className="App">
    

      <Router>
       
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/singin" element={ <SignInOutContainer/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
