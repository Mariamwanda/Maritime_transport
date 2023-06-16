

function Footer(){

    return (
        <>
            <footer>
                <div className="container-fluid footer">
                    <div className="footer2">
                        <h3>Objectifs</h3>
                        <a href="/#">Services</a>
                        <a href="/#">Accompagnement</a>
                        <a href="/#">Quarantie</a>
                        <a href="/#">impeccable</a>
                    </div>
                    <div className="footer1">
                        <h3>Servives</h3>
                            <p>« Si vous souhaitez connaître l'âge <br/>
                            du monde, regardez la surface de la mer dans<br/>
                            la tempête. » « Il ne faut pas lier un navire à<br/>
                            une seule ancre, ni une vie à un seul espoir. »<br/> 
                            « Si les pétroliers transportaient de l'eau de mer, <br/>
                            on s'en foutrait qu'ils fassent naufrage. »</p>
                    </div>
                    <div className="footer3">
                        <h3>Bulletin</h3>
                            <p href="/#">Entrez votre mail?</p> <br />
                        <input type="text"/>
                        <button className="btn btn-primary">Envoyer</button>
                    </div>
                 </div>
            </footer>

        </>
    )

}

export default Footer;