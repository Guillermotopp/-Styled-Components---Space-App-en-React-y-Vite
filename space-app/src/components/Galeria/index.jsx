import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
const Galeria = ({ fotos = [], setTag, fotoSelecionada, alAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFlotante>
                    <Titulos>Navega por la galería</Titulos>
                    <ImagenContainer>
                        {fotos.map(foto => <Imagen foto={foto} key={foto.id} alSolicitarZoom={fotoSelecionada} alAlternarFavorito={alAlternarFavorito} />)}
                    </ImagenContainer>
                </SeccionFlotante>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria