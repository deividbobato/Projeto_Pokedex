// array que recebe os JSON da API para os pokemons
const listaPokemons = [
    {"id": 4,
    "name" : "charmander",
    "types" : ["Fire"],
    "height" : 0.6,     
    "weight" : 8.5,
    "category": "Lizard",
    "abilities" : ["Blaze"],
    "weakness": ["Water", "Ground", "Rock"],
    "resistances" : ["Grass", "Bug", "Fairy"],
    
    "stats" : {
        "hp" : 39,
        "attack" : 52,
        "defense" : 43,
        "specialAttack" : 60,
        "specialDefense" : 50,
        "speed": 65,    
        "total": 309
     }
    }  
 ];

 console.log(listaPokemons);
    //em JSON, usamos pares de CHAVE e VALOR - CHAVE do lado esquerdo entre aspas duplas VALOR do lado direito dos dois pontos 