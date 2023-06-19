import './connexion.css'
const [name, setName] = useState('');
const [email, setEmail] = useState('');

function Connexion (){

    return (
   <>


    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </form>





    </>




    )



}

export default Connexion;