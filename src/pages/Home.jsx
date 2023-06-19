import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import navires from "./../../src/image/navires.jpeg"
import './style.css'

function Home(){
    return(
        <>
            <Navbar />
            <section id="header" class="jumbotron text-center ">
                <h1 className="display-3">Maritime_<span>Transport</span></h1>
                <p>Vous accompagne partout en Sécurité Avec Confiance.</p>
            </section>
   <div className="container">
   <h1 className="text-fonction">Notre Fonctionnement</h1>
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
   
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" align="center">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="./../../src/image/img5.webp" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./../../src/image/im8.jpeg" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./../../src/image/im8.jpeg" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
   </div>
 
</div>
        <Footer/>
        </>
    )
}
export default Home