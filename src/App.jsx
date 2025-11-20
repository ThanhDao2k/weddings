import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import { LoadingProvider } from './context/LoadingContext';

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
