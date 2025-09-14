import "./home.css";
import serviceImg from "../assets/service.png";
function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="question ">Pourquoi nous choisir ?</h1>

        <div className="service">
          <div className="serviceWithphoto">
            <div className="paragraph">
            <p className="notes">
              Chez Marketly, nous croyons que chaque entreprise mérite une
              solution simple et puissante pour gérer sa présence digitale.
              Notre approche repose sur la flexibilité, la transparence et le
              contrôle total entre vos mains.
            </p>

            <ul className="custom-list">
              <li>
                Une expérience 100% personnalisée : votre projet reflète
                vraiment votre identité.
              </li>
              <li>
                Aucune ligne de code à écrire : concentrez-vous sur votre
                business, nous faisons le reste.
              </li>
              <li>
                Tout est suivi et mesurable : chaque action, chaque performance,
                toujours sous vos yeux.
              </li>
              <li>
                Un contrôle complet : vous gardez la main sur chaque détail, en
                toute autonomie.
              </li>
            </ul>

            <p className="finall">
              Avec Marketly, vous avancez plus vite, plus sereinement, et
              surtout… avec des résultats tangibles.
            </p>
            </div>
             <img src={serviceImg} alt="description" />


          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
