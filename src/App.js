import './App.css';
import DataProvider from './components/context/Dataprovider';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <DataProvider>
      <Router>
      <Home/>
      </Router>
    </DataProvider>
    </>
  );
}

export default App;
