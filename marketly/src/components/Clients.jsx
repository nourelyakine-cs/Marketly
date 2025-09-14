
import Knauf from "../assets/Knauf.png";
import Naftal from "../assets/Naftal.png";

function Clients() {
  return (
    <section className="clients">
      <h2 className="clients-title">Nos clients</h2>
      <div className="clients-logos">
        {/* tu répètes plusieurs fois la série */}
        {[...Array(3)].map((_, i) => (
          <>
            <img key={`knauf-${i}`} src={Knauf} alt="Knauf" />
            <img key={`naftal-${i}`} src={Naftal} alt="Naftal" />
          </>
        ))}
      </div>
    </section>
  );
}

export default Clients;
