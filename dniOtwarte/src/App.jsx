import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from './components/navbar';
import Index from './components/index';
import Quiz from './components/quiz';
import Footer from './components/footer';
import ResultsTable from './components/Results';

document.title='Dni otwarte'

const App =()=>{
  return(
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/QUIZ" element={<Quiz />} />
          <Route path="/result" element={<ResultsTable />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
