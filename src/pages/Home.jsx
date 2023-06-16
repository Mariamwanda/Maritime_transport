import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import navires from "./../../src/image/navires.jpeg"
import './style.css'

function Home(){
    return(
        <>
            <Navbar />
            <section id="header" class="jumbotron text-center ">
                <h1 class="display-3">Maritime_Transport</h1>
                <p>Vous accompagne partout en SécuritéA.</p>
            </section>
    
            <section id="gallery">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src="./../../src/image/img4.webp" alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h2 class="card-title">Confiance</h2>
                                <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/img5.webp" alt="" class="card-img-top"/>
                        <div class="card-body">
                            <h2 class="card-title">Sécurité</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent</p>
                            <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                            <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/im8.jpeg" alt="" class="card-img-top"/>
                        <div class="card-body">
                            <h2 class="card-title">Garantie</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                            <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                            <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
        <Footer/>
        </>
    )
}
export default Home