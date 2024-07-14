import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/GlobalStyles/Cabecera"
import CampoTexto from "./components/CampoTexto/CampoTexto."
import BarraLateral from "./components/BarraLateral/BarraLateral"
import TituloEstilizado from "./components/TituloEstilizado/TituloEstilizado"
import Banner from "./components/Banner/Banner"
import CabeceraB from "./components/CabeceraB/CabeceraB"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%); 
width: 100%;
min-height: 100vh;
`
function App() {
  const bannerBackgroundImage = "./imagenes/logo.png"; // Cambia esta ruta por la ruta de tu imagen
  const bannerTexto = "Navegue por la Galeria"; // Texto a mostrar en el banner
  return (
    <>
      <FondoGradiente>
          <GlobalStyles />
          <Cabecera />
          <CabeceraB />
          <BarraLateral />
          <TituloEstilizado />
            <Banner texto={bannerTexto} backgroundImage={bannerBackgroundImage} />
      </FondoGradiente>
    </>
  )
}

export default App
