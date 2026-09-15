// array que recebe os JSON da API para os pokemons
const listaPokemons = [
    {
        "id": 384,
        "name": "rayquaza",
        "types": ["Dragon", "Flying"],
        "height": 7.0,
        "weight": 206.5,
        "category": "Sky High",
        "abilities": ["Air Lock"],
        "weakness": ["Ice", "Rock", "Dragon", "Fairy"],
        "resistances": ["Fire", "Water", "Grass", "Fighting", "Bug"],
        
        "stats": {
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "specialAttack": 150,
            "specialDefense": 90,
            "speed": 95,
            "total": 680
        }
    }
];

console.log(listaPokemons);