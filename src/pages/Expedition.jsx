import './connexion.css'


function Expedition() {

    return(
        <>
        <div class="expedition container">
            <div class="img-placed">
                <img src="src/image/img5.webp" alt=""/>
            </div>
            <form>
                <div class="row">
                <h1>Enregistrement</h1>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example1">Nom</label>
                            <input type="text" id="form3Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                           <label class="form-label" for="form3Example2">Prenom</label>
                            <input type="text" id="form3Example2" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example1">Contacts</label>
                            <input type="text" id="form3Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example2">Pays</label>
                            <input type="text" id="form3Example2" class="form-control" />
                        </div>
                    </div>
                </div>
                <input type="text" id="form3Example1" class="form-control" placeholder='Entrez votre colis'/>
               
                <select class="form-select form-select-lg">
                    <option>Fcfa</option>
                    <option>Euro</option>
                    <option>Cedi</option>
                    <option>Naira</option>
               </select>
                <input id="party" type="datetime-local" name="partydate" value="2017-06-01T08:30"/>

                <label id="fromCurrencyName"></label>
                
                <div id="select-field">
                <label htmlFor="">Pays Actuelle</label>
                    <select name="" id="toCurrency" onChange ="showCurency" style={{fontSize: "15px"}}>
                    <option value="BTC">Cote d'Ivoire</option>
                        <option value="ETH">France</option>
                        <option value="BNB">Ghana</option>
                        <option value="USDC">Burkina/Faso</option>
                        <option value="LTC">Togo</option>
                        <option value="TRX">Italie</option>
                    </select>
                    
                    <label htmlFor="">Destination</label>
                    <select name="" id="toCurrency" onChange ="showCurrencyName" style={{fontSize: "15px"}}>
                        <option value="BTC">Cote d'Ivoire</option>
                        <option value="ETH">France</option>
                        <option value="BNB">Ghana</option>
                        <option value="USDC">Burkina/Faso</option>
                        <option value="LTC">Togo</option>
                        <option value="TRX">Italie</option>
                    </select>
                </div>
            <button type="submit" id="convert" class="primary-btn">Expedier</button>
           </form>
        </div>
        </>
    )
    
}

export default Expedition;