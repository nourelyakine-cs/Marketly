import propImg from "../assets/propos.png";
function Pro() {
  

  return (
    <section className="propos">
      <div className="container2">
          <img src={propImg} alt="description" />
        <div className="Prop">
        <h1 className="titre2">À propos de nous</h1>
        <div className="text">
        <p>
          Marketly est une plateforme innovante qui simplifie 
          la création de marketplaces personnalisées.
        </p>
      
        <p>
          Nous donnons aux entrepreneurs 
          et commerçants les moyens de lancer un espace digital unique, moderne 
          et professionnel.
          </p>

        <p>
          Notre mission est de connecter produits, services et clients dans 
          un environnement simple et efficace. Conçu pour l’Algérie, Marketly 
          répond aux besoins locaux tout en ouvrant des perspectives globales. 
          Plus qu’un outil, nous sommes un partenaire qui accompagne votre croissance. 
          Avec Marketly, bâtissez dès aujourd’hui le futur de votre commerce.
        </p>
        </div>
        </div>
        </div>
    
    </section>
  );
}

export default Pro;