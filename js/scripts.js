var pokemonRepository = (function () {
var pokemonList = [
{
  pokemonName : 'Butterfree',
  pokemonHeight : 1.01,
  pokemoneTypes : ['Bug'],
},
{
  pokemonName : 'Rapidash',
  pokemonHeight : 1.07,
  pokemonTypes : ['Field'],
},
{
  pokemonName : 'Genesect',
  pokemonHeight : 1.05,
  pokemonTypes : ['No Eggs'],
},
{
  pokemonName : 'Pikachu',
  pokemonHeight : 0.4,
  pokemonTypes : ['Field, Fairy'],
},
];

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  pokemonList.push(pokemon);
}

return {
  getAll : getAll,
  add: add
};
})();

console.log(pokemonRepository.getAll() );
