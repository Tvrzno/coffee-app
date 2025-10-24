import { Outlet } from 'react-router';
import { NavBar } from './components/NavBar/NavBar.js';

function App() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;
