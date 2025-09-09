import "./home.css"; 
import logo from "../assets/logo.jpeg"; 

function Nav() {
  return (
    <div className="herader">
      <nav className="navbar">
      
        <div className="logo">
            <img src={logo} alt="Logo MyShop"/>
            </div>
    
        <ul className="nav-links">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Produits</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        
        <div className="auth-buttons">
          <button className="btn-signup">S’inscrire</button>
          <button className="btn-login"> Connecter</button>
        </div>
      </nav>
      </div>
    
  );
}

export default Nav;
