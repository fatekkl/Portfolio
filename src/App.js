import LayoutPrincipal from "./Components/Main";
import LayoutHeader from "./Components/Header";
import SobreMim from "./Components/SobreMim";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <LayoutHeader/>
    <LayoutPrincipal/>
    <SobreMim/>
    <Projetos/>
    <Contato/>
    <Footer/>
    </>
  );

}

export default App;
