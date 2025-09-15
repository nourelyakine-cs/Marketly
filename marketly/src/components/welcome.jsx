import bienvenu from "../assests/bienvenu.png";
import log from "../assests/log.png";
import "./personali.css";

function Welcome() {
  return (
    <section>
      <div className="sec1">
        <img src={log} alt="Logo MyShop" />
      </div>
      <div className="Bienvenu">
        <div className="containeR">
          <div className="g1">
            <h1>Lancez votre marketplace en un instant !</h1>
            <p>
              Bienvenue sur Marketly ! Vous êtes à un clic de créer votre
              marketplace unique. Suivez ces étapes simples pour personnaliser
              votre espace et le rendre à votre image. Pour continuer, cliquez
              sur le bouton Commencer ci-dessous.
            </p>
            <div className="commencer">
              <a href="#" className="btn-start">
                Commencer
              </a>
            </div>
          </div>
          <div className="g2">
            <div className="sec2">
              <img src={bienvenu} alt="Logo MyShop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Welcome;
