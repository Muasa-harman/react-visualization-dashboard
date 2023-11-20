import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
