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
    }, //  separando o Rayquaza do Mew
    {
        "id": 151,
        "name": "mew",
        "types": ["Psychic"],
        "height": 0.4,
        "weight": 4.0,
        "category": "New Species",
        "abilities": ["Synchronize"],
        "weakness": ["Bug", "Ghost", "Dark"],
        "resistances": [],
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100,
            "total": 600
        }
    }, // separando o Mew do Charmander
    {
        "id": 4,
        "name": "charmander",
        "types": ["Fire"],
        "height": 0.6,
        "weight": 8.5,
        "category": "Lizard",
        "abilities": ["Blaze"],
        "weakness": ["Water", "Ground", "Rock"],
        "resistances": ["Grass", "Bug", "Fairy"],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 65,
            "total": 309
        }
    }
];

console.log(listaPokemons);