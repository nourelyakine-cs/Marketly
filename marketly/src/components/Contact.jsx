
function Contact() {
    return(
<section className="contact">
<h2 className="titre3" > Contact</h2>
<div className="contactsgroup">
    <div className="p">
    <p className="une"> Une question, un projet ou besoin d’assistance ? Notre équipe est là pour vous accompagner. N’hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.</p>
    </div>
<div className="form">
    <input className="name" type="text" placeholder="Nom & Prénom" />
    <input className="email" type="text" placeholder="Email" />
    <input className="message" type="text" placeholder="votre message" />
    <button className="envoyer">Envoyer</button>

</div>

</div>
</section>
    )
}
export default Contact;
