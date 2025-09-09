function Inscrire(){
  return(
    <div className="page">
     
       <div className="InscriptionIcon">
         <div className="InsideInscriptionIcon">
         <form>
          <h2>S'Inscrire</h2>
          <input placeholder="Nom & Prénom"></input>
          <input placeholder="Email"></input>
          <input placeholder="saisir votre mot de passe"></input>
          <button>Connecter</button>
        </form>

        <div className="separator"></div>

        <div className="Inscrire_image">
          <h2>WELCOME TO MARKETLY</h2>
          <img src="src\imgs\freepik_assistant_1756855358422 1.png" alt="..." />
        </div>
        <div></div>
         </div>
      
       </div>
    </div>
  );
}
export default Inscrire;