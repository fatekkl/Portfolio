import LayoutPrincipal from "./Components/Main";
import LayoutHeader from "./Components/Header";
import SobreMim from "./Components/SobreMim";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";

function App() {
  return (
    <>
    <LayoutHeader/>
    <LayoutPrincipal/>
    <SobreMim/>
    <Projetos/>
    </>
  );

}

export default App;
