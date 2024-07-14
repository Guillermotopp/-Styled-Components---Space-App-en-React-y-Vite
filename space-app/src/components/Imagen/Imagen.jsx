const Imagen = ({ foto, expandida = false, alSolictarZoom, alAlternarFavorito }) => {

    // const iconoFavorito = foto.favorita ? '/iconos/favorito-activo.png' : '/iconos/favorito.png'
    let iconoFavorito = '/iconos/favorito.png';
    if (foto.favorita) {
        iconoFavorito = '/iconos/favorito-activo.png'
    }

    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Pie>
                <h4>{foto.fonte}</h4>
                <BotonIcono onClick={() => alAlternarFavorito(foto)}>
                    <img src={iconoFavorito} alt="Icono de favorito" />
                </BotonIcono>
                {!expandida && <BotonIcono aria-hidden={expandida} onClick={() => alSolictarZoom(foto)}>
                    <img src="/iconos/expandir.png" alt="Icono de expandir" />
                </BotonIcono>}
            </Pie>
        </figcaption>
    </Figure>)
}
export default Imagen