import React from "react";
import { useState } from "react";
import './Connecter.css';

function Connecter(){
  const [email,setemail]=useState("");
  const [passw,setpassw]=useState("");
  const handleEmailchange=(event)=>{
    setemail(event.target.value);
  }
  const handlePassWchange=(event)=>{
    setpassw(event.target.value);
  }


const handlesubmit=(event)=>{
event.preventDefault();
if( email===''||passw===''){
    alert('Veuillez remplir tous les champs.');
    return;
  }
  console.log('connecter',{email},{passw});//store data in data base 
  setemail("");
  setpassw("");
}

  return(
    <div className="pa_ge">     
       <div className="Inscription_Icon">
         <div className="Inside_Inscription_Icon">
           <div className="ima_ge">
          <h2>WELCOME Back</h2>
          <img src="src\imgs\freepik_assistant_1756855358422 1.png" alt="..." />
          
        </div> 
        <div className="separateur"></div>
          <form className="fo_rm">
          <h2>Se Connecter</h2>
          <input type="email" value={email} placeholder="adresse email" className="email" onChange={handleEmailchange } required></input>
          <input type="password"  value={passw} placeholder="saisir votre mot de passe" onChange={handlePassWchange}   required></input>  
          <button onClick={handlesubmit} type="submit" >Connecter</button>
          <p>Créer un nouveau compte</p>
        </form>
         </div>
       </div>
    </div>
  );
}
export default Connecter;