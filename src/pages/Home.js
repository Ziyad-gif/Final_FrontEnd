import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hello from "../components/Hello";
import Tabel from "../components/tabel/index";

import Image from './Image.png';
import "./home.css";
function Main() {
  return (
    <main>
      <div class="pa">

      <h2 class="ha3">Data Covid</h2>

      <p>Monitoring Perkembangan Covid</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis, voluptate laboriosam tempora optio impedit.</p>
      <button>Vaccine</button>
      </div>


      <img src={Image} alt=""/>


      

  

    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />

    </>
  );
}

export default Home;
