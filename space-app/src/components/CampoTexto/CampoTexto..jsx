import React from 'react';
import { styled } from "styled-components"
import search from '/iconos/search.png'
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;
const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #C98CF1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;
const IconoLupa = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  width: 32px; 
  height: 32px; 
`;
const CampoTexto = (props) => {
    return (
      <ContainerEstilizado>
        <CampoTextoEstilizado placeholder="Busca una foto" {...props} />
        <IconoLupa src={search} alt="ícono de lupa" />
      </ContainerEstilizado>
    );
  };

export default CampoTexto;