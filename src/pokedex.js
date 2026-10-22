const listaPokemons = [
    {
        "id": 384,
        "name": "rayquaza",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
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
    }, //Mew
    {
        "id": 151,
        "name": "mew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
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
    }, // charmander
    {
        "id": 4,
        "name": "charmander",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
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
    },
    { // rattata
        "id": 19,
        "name": "rattata",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        "types": ["Normal"],
        "height": 0.3,
        "weight": 3.5,
        "category": "Mouse",
        "abilities": ["Run Away", "Guts", "One-Hit Wonder"],
        "weakness": ["Fighting"],
        "resistances": ["Poison", "Bug", "Fairy"],
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 38,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 72,
            "total": 276
        }
    },
    {// pidgey
        "id": 16,
        "name": "pidgey",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        "types": ["Normal", "Flying"],
        "height": 0.3,
        "weight": 1.8, 
        "category": "Tiny Bird",
        "abilities": ["Keen Eye", "Tangled Feet", "Big Pecks"],
        "weakness": ["Electric", "Ice", "Rock"],
        "resistances": ["Grass", "Bug", "Fighting"],
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 56,
            "total": 251
        } 
    },
    {// pikachu
        "id": 25,
        "name": "pikachu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "types": ["Electric"],
        "height": 0.4,
        "weight": 6.0,
        "category": "Mouse",
        "abilities": ["Static", "Volt Absorb"],
        "weakness": ["Ground"],
        "resistances": ["Flying", "Steel"],
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90,
            "total": 320
        }
    },
    {// squirtle
        "id": 7,
        "name": "squirtle",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "types": ["Water"],
        "height": 0.5,
        "weight": 9.0,
        "category": "Tiny Turtle",
        "abilities": ["Torrent", "Rain Dish"],
        "weakness": ["Electric", "Grass"],
        "resistances": ["Fire", "Water", "Ice", "Steel"],
        "stats": {
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 64,
            "speed": 43,
            "total": 314
        }
    },
    {// bulbasaur
        "id": 1,
        "name": "bulbasaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "types": ["Grass", "Poison"],
        "height": 0.7,
        "weight": 6.9,
        "category": "Seed",
        "abilities": ["Overgrow", "Chlorophyll"],
        "weakness": ["Fire", "Ice", "Flying", "Psychic"],
        "resistances": ["Water", "Electric", "Grass", "Fighting"],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 45,
            "total": 318
        }
    },
    {//snorlax
        "id": 143,
        "name": "snorlax",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
        "types": ["Normal"],
        "height": 1.2,
        "weight": 46.0,
        "category": "Sleeping",
        "abilities": ["Immunity", "Thick Fat", "Gluttony"],
        "weakness": ["Fighting"],
        "resistances": ["Ghost"],
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 30,
            "total": 500
        }

    },
    {//  blastoise
        "id": 9,
        "name": "blastoise",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "types": ["Water"],
        "height": 1.0,
        "weight": 85.5,
        "category": "Shellfish",
        "abilities": ["Torrent", "Rain Dish"],
        "weakness": ["Electric", "Grass"],
        "resistances": ["Fire", "Water", "Ice", "Steel"],
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "specialAttack": 85,
            "specialDefense": 100,
            "speed": 78,
            "total": 535
        }

    }

];

console.log(listaPokemons);


//logica pokedex
//logica pokedex
let estadoPokemons = [];
let tipoAtivo = "Todos";
let ordemAtiva = "numero";

let colecao = [];
const CHAVE_COLECAO = "pokedexColecao";

const TIPOS = [
    "Todos", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon",
    "Dark", "Normal", "Fighting", "Poison", "Ground", "Flying", "Bug", "Rock",
    "Ghost", "Steel", "Fairy"
];

const COR_TIPO = {
    Grass: "#3a9a4f",    Poison: "#a050c8",  Fire: "#f05a28",
    Water: "#3a86e0",    Electric: "#e8b800", Psychic: "#ea5a9a",
    Ice: "#5bc8d8",      Dragon: "#6a4cd8",  Dark: "#4a4458",
    Normal: "#8a8a7a",   Fighting: "#c03028", Ground: "#c8a040",
    Flying: "#7a90e0",   Bug: "#8ab020",     Rock: "#a8903a",
    Ghost: "#6a50a0",    Steel: "#8a9aaa",   Fairy: "#e888b8"

};

function corDoTipo(pokemon) {
    return COR_TIPO[pokemon.types[0]] || "#888";
}

function nomeBonito(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function formatarNumero(id) {
    return "#" + String(id).padStart(3, "0");
}

function corHp(hp) {
    if (hp < 50) return "#c00000";
    if (hp < 80) return "#d4a017";
    return "#2e9e4f";
}

function htmlTipos(pokemon) {
    return pokemon.types
        .map(t => `<span class="badge-tipo" style="--cor:${COR_TIPO[t] || "#888"}">${t}</span>`)
        .join("");

}

const ICONE_LIXEIRA = `
    <svg 
        viewBox="0 0 24 24" 
        width="18"
        height="18" 
        fill="none" 
        stroke="currentColor"
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        aria-hidden="true"
    >
        <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6"/>
    </svg>`;

function inicializarEstado() {
    if (typeof listaPokemons === "undefined") {
        console.error("listaPokemons não foi encontrada.");
        estadoPokemons = [];
        return;
    }

    let dadosSalvos = null;
    try {
        dadosSalvos = JSON.parse(localStorage.getItem("pokedexData"));
    } catch (erro) {
        dadosSalvos = null;
    }

    if (Array.isArray(dadosSalvos) && dadosSalvos.length > 0) {
        estadoPokemons = dadosSalvos;
    } else {
        estadoPokemons = listaPokemons;
        localStorage.setItem("pokedexData", JSON.stringify(estadoPokemons));
    }
}
salvarColecao
function carregarColecao() {
    try {
        const salvo = JSON.parse(localStorage.getItem(CHAVE_COLECAO));
        colecao = Array.isArray(salvo) ? salvo : [];
    } catch (erro) {
        colecao = [];
    }
}

function salvarColecao() {
    try {
        localStorage.setItem(CHAVE_COLECAO, JSON.stringify(colecao));
    } catch (erro) {
        console.error("Não foi possível salvar a coleção:", erro);
    }
}

function estaCapturado(id) {
    return colecao.includes(id);
}

function capturar(id) {
    if (estaCapturado(id)) return;
    colecao.push(id);
    salvarColecao();
}

function remover(id) {
    colecao = colecao.filter(item => item !== id);
    salvarColecao();
}

function obterListaFiltrada() {
    let lista = estadoPokemons.filter(p =>
        tipoAtivo === "Todos" || p.types.includes(tipoAtivo)
    );

    if (ordemAtiva === "numero") lista.sort((a, b) => a.id - b.id);
    if (ordemAtiva === "nome")   lista.sort((a, b) => a.name.localeCompare(b.name));
    if (ordemAtiva === "hp")     lista.sort((a, b) => b.stats.hp - a.stats.hp);

    return lista;
}


function renderizarTipos() {
    const container = document.getElementById("lista-tipos");
    container.innerHTML = "";

    TIPOS.forEach(tipo => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "opcao" + (tipo === tipoAtivo ? " ativo" : "");
        botao.dataset.tipo = tipo;
        botao.textContent = (tipo === "Todos" ? "◈ " : "") + tipo;
        container.appendChild(botao);
    });
}

function renderizarPokedex() {
    const container = document.getElementById("grid-cartoes");
    const lista = obterListaFiltrada();

    document.getElementById("contador").textContent =
        `${lista.length} / ${estadoPokemons.length} Pokémons`;

    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhum Pokémon encontrado.</p>";
        return;
    }

    lista.forEach(pokemon => {
        const hp = pokemon.stats.hp;
        const cartao = document.createElement("div");
        cartao.className = "cartao-pokemon";
        cartao.style.setProperty("--cor", corDoTipo(pokemon));

        cartao.innerHTML = `
            <span class="cartao-numero">${formatarNumero(pokemon.id)}</span>

            <button
                type="button"
                class="btn-captura ${estaCapturado(pokemon.id) ? 'capturado' : ''}"
                data-captura-id="${pokemon.id}"
                aria-label="capturar Pokémon"
            >
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="12" cy="12" r="9"
                        fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 12h18"
                        stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3"
                        fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
            </button>

            <img class="cartao-img" src="${pokemon.imagem || pokemon.image}" alt="${pokemon.name}">
            <h3 class="cartao-nome"> ${nomeBonito(pokemon.name)}</h3>
            <div class="cartao-tipos">${htmlTipos(pokemon)}</div>

            <div class="cartao-hp"><span>HP</span><span>${hp}</span></div>
            <div class="barra">
                <div class="barra-preenchida"
                style="width:${Math.min(hp / 255 * 100, 100)}%; background:${corHp(hp)}"></div>
            </div>

            <div class="cartao-medidas">
                <span>${pokemon.height.toFixed(1)}m</span>
                <span>${pokemon.weight.toFixed(1)}kg</span>
           </div>
        `;
        container.appendChild(cartao);
    });
}

document.getElementById("grid-cartoes").addEventListener("click", function(evento) {
    const botao = evento.target.closest("[data-captura-id]");

    if (!botao) return;

    const id = Number(botao.dataset.capturaId);

    if (estaCapturado(id)) {
        remover(id);
    } else {
        capturar(id);
    }

    renderizarPokedex();
});

document.getElementById("lista-tipos").addEventListener("click", e => {
    const botao = e.target.closest("[data-tipo]");
    if (!botao) return;
    tipoAtivo = botao.dataset.tipo;
    renderizarTipos();
    renderizarPokedex();
});

document.getElementById("lista-ordem").addEventListener("click", e => {
    const botao = e.target.closest("[data-ordem]");
    if (!botao) return;
    ordemAtiva = botao.dataset.ordem;
    document.querySelectorAll("#lista-ordem .opcao").forEach(b =>
        b.classList.toggle("ativo", b === botao)
    );
    renderizarPokedex();
});



const abas = document.querySelectorAll (".aba");
const paineis = document.querySelectorAll (".painel");


function mostrarAba (idAba) {
    const idPainel = idAba.replace("aba-", "painel-");

    abas.forEach(aba => {
        const ativa = aba.id === idAba;
        aba.setAttribute("aria-selected", ativa);
        aba.tabIndex = ativa ? 0 : -1;
    });

    paineis.forEach(painel => {
        if (painel.id === idPainel) {
            painel.hidden = false;
            painel.style.display = "block";
        } else {
            painel.hidden = true;
            painel.style.display = "none";
        }
    });
}

abas.forEach(aba => {
    aba.addEventListener("click", () => mostrarAba(aba.id));
});

inicializarEstado();
carregarColecao ();
renderizarTipos();
renderizarPokedex();