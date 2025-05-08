import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    fetch(`${API_URL}/api/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Coffee List</h2>
      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.coffee_pk}>{coffee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
