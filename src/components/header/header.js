import './header.css';

const search = ()=>{
    const valor = document.querySelector('input').value
    document.querySelectorAll('.pokemon').forEach((element)=>{
        const clas = element.classList[1]
        if (clas.match(valor)){
            console.log(valor)
            console.log(clas)
            element.classList.remove('display-none')
        }else{
            element.classList.add('display-none')
        }
    })
}

export function Header() {
    return (
        <header>
            <h1>POKEDEX</h1>
            <input type='search' placeholder='Search pokemons' onChange={search} />
        </header>
    )
}