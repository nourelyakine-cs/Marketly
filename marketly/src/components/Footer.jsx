import logo2 from "../assets/logo2.png";
function Footer() {
  return (
    <section className="footer">
      <div className="liens">
        <h2>Liens</h2>
        <ul className="links">
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
      </div>
      <div className="marketly">
        <div className="logo2">
          <img src={logo2} alt="Logo MyShop" />
        </div>
        <p className="footpar">
          « Marketly aide les entreprises à créer leur marketplace personnalisée
          et à connecter leurs clients en ligne. »
        </p>
        <button className="bt-login"> Connecter</button>
      </div>
      
<div className="cordonnées">
    <h2 className="CorTiltle" > Cordonnées</h2>
     <ul>
          <li>
            <a href="mailto:Marketly@gmail.com">
               Marketly@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:0555848685">
               05-55-84-86-85
            </a>
          </li>
          <li>
            <a href="https://maps.google.com/?q=bouzereah,Alger" target="_blank" rel="noopener noreferrer">
               Bouzereah, Alger
            </a>
          </li>
        </ul>

        <div className="socials">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>


</div>

    </section>
  );
}
export default Footer;
