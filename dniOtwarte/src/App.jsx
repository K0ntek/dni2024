import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from './components/navbar';
import Index from './components/index';
import Quiz from './components/quiz';
import Footer from './components/footer';
import ResultsTable from './components/ResultsTable';

document.title='Dni otwarte'

const App =()=>{
  return(
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/QUIZ" element={<Quiz />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
