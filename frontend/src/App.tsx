import { Outlet } from 'react-router';
import { NavBar } from './components/NavBar/NavBar.js';
import './App.scss';

function App() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;
