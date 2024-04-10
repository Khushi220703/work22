
import Header from './components/header.js';
import Footer from './components/footer.js';
import Dashboard from './components/dashboard.js';
import MailMessage from './components/mailMessage.js';
import Question from './components/question.js';
import Signup from './components/signup.js';

import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div >
      <BrowserRouter>
         
         
          <Routes>
            <Route exact path='/' element={<Signup/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/question" element={<Question/>}></Route>
            <Route exact path="/header" element={<Header/>}></Route>
            <Route exact path="/mailMessage" element={<MailMessage/>}></Route>
            <Route exact path="/footer" element={<Footer/>}></Route>
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
