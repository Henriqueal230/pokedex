import '../App.css';

async function getpokemon(){
    var n = 1

    while(n < 906){
        const url = 'https://pokeapi.co/api/v2/pokemon/'+ n
        
        const response = await fetch(url)
        const data = await response.json();

        // Name pokemon
        const name = data.name
        const namee = document.createElement('h5');
        namee.classList.add('nome-pokemon');
        namee.innerText = name;

        // Numero pokemon
        const nume = document.createElement('p')
        nume.classList.add('num-pokemon');
        nume.innerText = 'Nº' + n

        // Image pokemon
        const img = data.sprites
        const image = img.front_default
        const imge = document.createElement('img');
        imge.setAttribute('src', image);
        imge.setAttribute('alt','sem registo');

        // Adicionando classes a div pai
        const div = document.createElement('div');
        div.classList.add('pokemons');
        div.classList.add(name)

        div.append(nume);
        div.append(imge)
        div.appendChild(namee);
        
        // Adicionando tipos de cada pokemon
        data.types.map(tipo => {
            
            const tipos = document.createElement('span')
            tipos.innerText = tipo.type.name
            div.append(tipos);

            if (tipo.type.name == 'grass'){
                tipos.classList.add('grass')
            }else if(tipo.type.name == 'fire'){
                tipos.classList.add('fire')
            }else if(tipo.type.name == 'poison'){
                tipos.classList.add('poison')
            }else if(tipo.type.name == 'flying'){
                tipos.classList.add('flying')
            }else if(tipo.type.name == 'water'){
                tipos.classList.add('water')
            }else if(tipo.type.name == 'bug'){
                tipos.classList.add('bug')
            }else if(tipo.type.name == 'normal'){
                tipos.classList.add('normal')
            }else if(tipo.type.name == 'electric'){
                tipos.classList.add('electric')
            }else if(tipo.type.name == 'ground'){
                tipos.classList.add('ground')
            }else if(tipo.type.name == 'fairy'){
                tipos.classList.add('fairy')
            }else if(tipo.type.name == 'fighting'){
                tipos.classList.add('fighting')
            }else if(tipo.type.name == 'psychic'){
                tipos.classList.add('psychic')
            }else if(tipo.type.name == 'rock'){
                tipos.classList.add('rock')
            }else if(tipo.type.name == 'steel'){
                tipos.classList.add('steel')
            }else if(tipo.type.name == 'ice'){
                tipos.classList.add('ice')
            }else if(tipo.type.name == 'ghost'){
                tipos.classList.add('ghost')
            }else if(tipo.type.name == 'dragon'){
                tipos.classList.add('dragon')
            }else if(tipo.type.name == 'dark'){
                tipos.classList.add('dark')
            }
        });

        if (n > 20){
            div.classList.add('display-none')
            document.querySelector('.pokemon').classList.remove('display-none') 
            document.querySelector('#carregando').classList.add('display-none')
        }

        const pokemon = document.querySelector('.pokemon');
        pokemon.appendChild(div);

        n+=1

    }
}

const todos = ()=>{document.querySelectorAll('.pokemons').forEach((name)=>{
        name.classList.remove('display-none')
    })
}

getpokemon();

function Pokemon(){
    return(
        <div className='pokemon display-none'>
            <div className='button' onClick={todos}>
                <p>Mostrar tudo</p>
            </div>
        </div>
    )
}

export default Pokemon;
