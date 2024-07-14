import styled from "styled-components";
import CampoTexto from "../../CampoTexto/CampoTexto.";
const HeaderEstilizado = styled.header`


    padding: 60px 0;
    display: flex;
    justify-content: space-between;
        img{width: 211.42px;
            height: 65px;
            top: 60px;
            left: 24px;
            gap: 0px;
            opacity: 0px;
            }
`
const Cabecera = () => {

    return <HeaderEstilizado>
        <img src ="../imagenes/logo.png" alt="Logo de space App" />
        <CampoTexto />
    </ HeaderEstilizado>
}

export default Cabecera