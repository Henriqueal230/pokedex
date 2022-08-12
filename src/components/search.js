import '../App.css'

function get(){
    document.querySelectorAll('.pokemons').forEach((name)=>{
        const test = name.classList[1]
        const search = document.getElementById('search').value;
        if(test.match(search)){
            name.classList.remove('display-none')
        }else{
            name.classList.add('display-none')
        }
    })
}

function Search(){
    return(
        <header>
            <h3>POKEDEX</h3>
            <input type='text' id='search' placeholder='Busque o pokemon' autoComplete='off' onChange={get} />
        </header>
    )
}

export default Search;