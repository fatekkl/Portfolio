import LayoutPrincipal from "./Components/Main";
import LayoutHeader from "./Components/Header";
import SobreMim from "./Components/SobreMim";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

function App() {

  window.addEventListener("scroll", function () {
    const menu = this.document.querySelector("#headerid")
    const label = this.document.querySelector(".labelclasse")

    menu.classList.toggle("sticky", window.scrollY > 50);
    label.classList.toggle("sticky", window.scrollY > 50);
  });

  return (
    <>
      <LayoutHeader />
      <LayoutPrincipal />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );

}

export default App;
