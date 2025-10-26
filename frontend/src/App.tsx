import { Outlet } from 'react-router';
import { NavBar } from './components/NavBar/NavBar.js';
import { Toaster } from 'react-hot-toast';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Toaster
        position="top-center"
        toastOptions={{
          className: '',
          style: {
            background: '#fff',
            border: '1px solid #2d1910',
            padding: '25px 35px',
            color: '#2d1910',
            fontFamily: "'Inter', sans-serif",
          },
        }}
      />
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;
