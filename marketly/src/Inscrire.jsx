import React from "react";
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import './Inscrire.css';
function Inscrire(){
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [passw,setpassw]=useState("");
  const [npassw,setnpassw]=useState("");
  const [passWErr,setpassWErr]=useState("");
  const terms=useRef(null);
  const [termsErr,settermsErr]=useState(false);

  const handleEmailchange=(event)=>{
    setemail(event.target.value);
  }
  const handleNamechange=(event)=>{
    setname(event.target.value);
  }
  const handlePassWchange=(event)=>{
    setpassw(event.target.value);
  }

  const ConfirmPassW=(event)=>{
    setnpassw(event.target.value);
    if(npassw!==passw){
       setpassWErr('Verifier votre mot de passe');
    }
    else{
       setpassWErr("");  
    }
  }

const handlesubmit=(event)=>{
event.preventDefault();
if(name===''|| email===''||passw===''){
    alert('Veuillez remplir tous les champs.');
    return;
  }
  if(name!==''&& email!==''&& passw!==''&& !terms.current.checked){
     
     terms.current.focus();
    settermsErr(true);
    return;
  }else{
    settermsErr(false);
  }
  
  console.log('submit',{name},{email},{passw});//store data in data base 
  setname("");
  setemail("");
  setpassw("");
  setpassWErr(""); 
  setnpassw("");
  terms.current.checked=false;

}

  return(
    <div className="page">     
       <div className="InscriptionIcon">
         <div className="InsideInscriptionIcon">
         <form>
          <h2>S'Inscrire</h2>
          <input type="text" value={name} placeholder="Nom & Prénom" onChange={handleNamechange}   required></input>
          <input type="email" value={email} placeholder="email" className="email" onChange={handleEmailchange } required></input>
          <input type="password" value={passw} placeholder="saisir votre mot de passe" onChange={handlePassWchange}   required></input>
          <input type="password" value={npassw} placeholder="confirmer votre mot de passe" onChange={ConfirmPassW}  required></input>
          <div className={`terms ${termsErr ? "error" : ""}`}>

          <input type="checkbox" ref={terms}  onChange={(e) => settermsErr(!e.target.checked)} />
           <label htmlFor="conditions" className="conditions">
           J’accepte <a href="#">les termes et conditions </a> 
          </label>
           </div>
          {passWErr?<p className="errmsg">vérifier votre mot de passe</p>:null}
          <button  type="submit" onClick={handlesubmit}>Connecter</button>

        </form>
        <div className="separator"></div>
        <div className="Inscrire_image">
          <h2>WELCOME TO MARKETLY</h2>
          <img src="src\imgs\freepik_assistant_1756855358422 1.png" alt="..." />
          <p>avez vous déjà un compte ?<Link to="/Connecter">se connecter</Link></p>
        </div>
         </div>
       </div>
    </div>
  );
}
export default Inscrire;