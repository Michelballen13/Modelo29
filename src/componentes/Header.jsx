const Header = ({ autor, titulo, ficha, centrodeformacion }) => {
    const headerStyles = {
        backgroundColor: "#d4e2e3",
        padding: "123px 20px",  // Añadido para un mejor espaciado
    };

    const autorStyles = {
        color: "blue",
    };

    const fichaStyles = {
        color: "green",
    };

    const centroStyles = {
        color: "darkorange",
    };

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1>{titulo}</h1>
                <p style={autorStyles}>Autor: {autor}</p>
                <p style={fichaStyles}>Ficha: {ficha}</p>
                <p style={centroStyles}>Centro de Formación: {centrodeformacion}</p>
            </div>
        </header>
    );
}

export default Header;