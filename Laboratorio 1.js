let cuadros = [
    {
        titulo: "Mona Lisa",
        artista: "Leonardo da Vinci",
        anio: 1503
    },
    {
        titulo: "La última cena",
        artista: "Leonardo da Vinci",
        anio: 1495
    },
    {
        titulo: "La noche estrellada",
        artista: "Vincent van Gogh",
        anio: 1889
    },
    {
        titulo: "El grito",
        artista: "Edvard Munch",
        anio: 1893
    },
    {
        titulo: "El Guernica",
        artista: "Pablo Picasso",
        anio: 1937
    },
    {
        titulo: "El beso",
        artista: "Gustav Klimt",
        anio: 1907
    },
    {
        titulo: "La joven de la perla",
        artista: "Johannes Vermeer",
        anio: 1665
    },
    {
        titulo: "El nacimiento de Venus",
        artista: "Sandro Botticelli",
        anio: 1485
    },
    {
        titulo: "Las meninas",
        artista: "Diego Velázquez",
        anio: 1656
    },
    {
        titulo: "La creación de Adán",
        artista: "Miguel Ángel",
        anio: 1512
    }
];

cuadros.forEach(cuadro => {
    console.log(`Título: ${cuadro.titulo}, Artista: ${cuadro.artista}, Año: ${cuadro.anio}`);
});