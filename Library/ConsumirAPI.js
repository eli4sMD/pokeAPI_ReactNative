const API = 'https://pokeapi.co/api/v2/pokemon/?limit=50'
  
function obtenerPokemon(id) {
const url = `${API}${id}`
return fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
    console.log(datos)
    return datos;
    })
    .catch(error => {
    console.error( 'Se produjo un error: ', error) ;
    });
};

export default obtenerPokemon