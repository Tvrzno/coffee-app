import { Link } from 'react-router';

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/records">Records</Link>
    </div>
  );
};
