var repository = [
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
}
];

for ( let i = 0; i < repository.length; i++) {
  document.write('<h2>' + repository[i].pokemonName + '</h2>' + ' Height: ' + repository[i].pokemonHeight)
if (repository[i].pokemonHeight >= 1.07) {
  document.write(' (Wow that\'s big!)' )
  }
}
