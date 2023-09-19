import LayoutPrincipal from "./Components/Main";
import LayoutHeader from "./Components/Header";
import SobreMim from "./Components/SobreMim";
import Projetos from "./Components/Projetos";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <>
    <LayoutHeader/>
    <LayoutPrincipal/>
    <SobreMim/>
    <DarkMode/>
    <Projetos/>
    </>
  );

}

export default App;
