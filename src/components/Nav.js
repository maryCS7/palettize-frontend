
import { NavLink } from 'react-router-dom'

function Nav(){
  return <nav>
      <div className="nav-bar">
      <NavLink  className="nav-link" to="/palettes">Browse Palettes</NavLink>&nbsp;
      <NavLink className="nav-link" to="/dashboard">My Dashboard</NavLink>&nbsp;
      <NavLink className="nav-link" to="/login">Login</NavLink>&nbsp;
      <NavLink className="nav-link" to="/signup">Sign up</NavLink>&nbsp;
      <NavLink className="nav-link" to="/create">Create</NavLink>&nbsp;
      <NavLink className="nav-link" to="/add">Add A Palette</NavLink>&nbsp;
      <NavLink className="nav-link" to="/">Logout</NavLink>&nbsp;
      </div>
  </nav>
}

export default Nav