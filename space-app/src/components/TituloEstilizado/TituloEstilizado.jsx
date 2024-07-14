import React from 'react';
import styled from 'styled-components';

const TituloEstilizadoWrapper = styled.div`
  width: 524px;
  height: 43px;
  padding: 10px;
  border-radius: 10px;
  background-color: #17233C;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TituloEstilizado = styled.h2`
  font-family: 'Amiko', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 42.69px;
  color: #7B78E5;
`;

const Titulo = () => {
  return (
    <TituloEstilizadoWrapper>
      <TituloEstilizado>Navegue por la galería</TituloEstilizado>
    </TituloEstilizadoWrapper>
  );
};

export default Titulo;
