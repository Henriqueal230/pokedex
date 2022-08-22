import './cardpokemon.css';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=905&offset=0'

async function getpokemon(){
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    let n = 0
    results.map((element)=>{ 

        n += 1

        // Numero
        const numero = document.createElement('p')
        numero.innerText = 'N° '+ n

        // Image 
        const image = document.createElement('img')
        image.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+n+'.png')

       // Name
       const name = document.createElement('p')
       name.innerText = element.name
        
        // List
        const card = document.createElement('li')
        card.appendChild(numero)
        card.appendChild(image)
        card.appendChild(name)
        card.classList.add('pokemon')
        card.classList.add(element.name)

        // Add to page

        document.querySelector('.pokemons').appendChild(card)
    })
}

getpokemon()

export function Cardpokemon(){
    return (
        <ul className='pokemons'>

        </ul>
    )
}