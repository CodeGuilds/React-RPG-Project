import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Domov</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/messages">Správy</Link></li>
        <li><Link to="/shop">Obchod</Link></li>
        <li><Link to="/work">Práca</Link></li>
        <li><Link to="/missions">Misie</Link></li>
        <li><Link to="/battle">Battle</Link></li>
        <li><Link to="/home">Môj dom</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;